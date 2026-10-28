export interface StatsProvider {
  district: string;
  capacity: string | null;
  categoryName: string;
  isPrivate: boolean;
}

export interface PublicPrivateCount {
  total: number;
  public: number;
  private: number;
}

export type DistrictCounts = Readonly<Record<string, number>>;

export interface Statistics {
  providers: PublicPrivateCount;
  suppliers: PublicPrivateCount;
  homeless: number;
  children: number;
  byDistrict: { all: DistrictCounts; homeless: DistrictCounts; children: DistrictCounts };
  capacityByDistrict: DistrictCounts;
}

// Same substrings the legacy Hasura `_like` aggregates used.
const HOMELESS_CATEGORY = 'fără adăpost';
const CHILDREN_CATEGORY = 'pentru copii';

function countPublicPrivate(items: readonly { isPrivate: boolean }[]): PublicPrivateCount {
  const privateCount = items.filter((item) => item.isPrivate).length;
  return { total: items.length, public: items.length - privateCount, private: privateCount };
}

function sumByDistrict(providers: readonly StatsProvider[], valueOf: (p: StatsProvider) => number): DistrictCounts {
  return providers.reduce<Record<string, number>>(
    (acc, provider) => ({ ...acc, [provider.district]: (acc[provider.district] ?? 0) + valueOf(provider) }),
    {}
  );
}

function parseCapacity(capacity: string | null): number {
  const value = Number.parseInt(capacity ?? '', 10);
  return Number.isNaN(value) ? 0 : value;
}

export function computeStatistics(providers: readonly StatsProvider[], suppliers: readonly { isPrivate: boolean }[]): Statistics {
  const homeless = providers.filter((p) => p.categoryName.includes(HOMELESS_CATEGORY));
  const children = providers.filter((p) => p.categoryName.includes(CHILDREN_CATEGORY));
  const one = () => 1;

  return {
    providers: countPublicPrivate(providers),
    suppliers: countPublicPrivate(suppliers),
    homeless: homeless.length,
    children: children.length,
    byDistrict: {
      all: sumByDistrict(providers, one),
      homeless: sumByDistrict(homeless, one),
      children: sumByDistrict(children, one),
    },
    capacityByDistrict: sumByDistrict(providers, (p) => parseCapacity(p.capacity)),
  };
}
