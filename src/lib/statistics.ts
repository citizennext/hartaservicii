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

/** Capacities are free text in the source data; use the first number, as the legacy map did. */
function parseCapacity(capacity: string | null): number {
  const firstNumber = capacity?.match(/\d+/)?.[0];
  return firstNumber ? Number.parseInt(firstNumber, 10) : 0;
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

export interface ShadedDistrict {
  name: string;
  value: number;
  fill: string;
}

// Legacy StatisticsMap colour ramp: celeste hue, lightness from 100% (none) down by up to 58 points.
const CHOROPLETH_HUE_SATURATION = '177, 35%';
const CHOROPLETH_LIGHTNESS_RANGE = 58;

export function choropleth(values: DistrictCounts, districts: readonly string[]): { max: number; districts: ShadedDistrict[] } {
  const max = Math.max(0, ...Object.values(values));
  const shade = (value: number) => {
    const lightness = max === 0 ? 100 : 100 - (value / max) * CHOROPLETH_LIGHTNESS_RANGE;
    return `hsl(${CHOROPLETH_HUE_SATURATION}, ${Math.round(lightness)}%)`;
  };
  return {
    max,
    districts: districts.map((name) => {
      const value = values[name] ?? 0;
      return { name, value, fill: shade(value) };
    }),
  };
}
