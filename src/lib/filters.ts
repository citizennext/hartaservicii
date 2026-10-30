import { DISTRICT_CENTERS } from '../data/districts';

export interface MapProvider {
  id: string;
  name: string;
  coordinates: readonly [number, number];
  district: string;
  categoryName: string;
  serviceName: string;
  isPrivate: boolean;
}

export interface MapFilters {
  district: string | null;
  /** Age group, matched against the category name (legacy naming). */
  category: string | null;
  /** Matched against the category name (legacy naming). */
  service: string | null;
  /** Matched against the service name. */
  specialization: string | null;
  /** true = private, false = public, null = both. */
  administrator: boolean | null;
}

export const EMPTY_FILTERS: Readonly<MapFilters> = Object.freeze({
  district: null,
  category: null,
  service: null,
  specialization: null,
  administrator: null,
});

const TEXT_KEYS = ['district', 'category', 'service', 'specialization'] as const;

const contains = (haystack: string, needle: string | null): boolean => needle === null || haystack.includes(needle);

function matches(provider: MapProvider, filters: MapFilters): boolean {
  return (
    contains(provider.district, filters.district) &&
    contains(provider.categoryName, filters.category) &&
    contains(provider.categoryName, filters.service) &&
    contains(provider.serviceName, filters.specialization) &&
    (filters.administrator === null || provider.isPrivate === filters.administrator)
  );
}

export function filterProviders(providers: readonly MapProvider[], filters: MapFilters): MapProvider[] {
  return providers.filter((provider) => matches(provider, filters));
}

function parseBoolean(value: string | null): boolean | null {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return null;
}

export function filtersFromSearch(search: string): MapFilters {
  const params = new URLSearchParams(search);
  const text = Object.fromEntries(TEXT_KEYS.map((key) => [key, params.get(key) || null]));
  return { ...EMPTY_FILTERS, ...text, administrator: parseBoolean(params.get('administrator')) };
}

export function filtersToSearch(filters: MapFilters): string {
  const entries = Object.entries(filters)
    .filter(([, value]) => value !== null)
    .map(([key, value]) => [key, String(value)]);
  const query = new URLSearchParams(entries).toString();
  return query ? `?${query}` : '';
}

export interface FilterOptions {
  districts: string[];
  services: string[];
  specializations: string[];
}

const collator = new Intl.Collator('ro');
const uniqueSorted = (values: readonly string[]): string[] => [...new Set(values)].sort(collator.compare);

/** Options are derived from the data itself, so they only ever offer choices that have results. */
export function filterOptions(providers: readonly MapProvider[], filters: MapFilters): FilterOptions {
  const { service } = filters;
  return {
    districts: uniqueSorted(providers.map((p) => p.district)),
    services: uniqueSorted(providers.map((p) => p.categoryName)),
    specializations:
      service === null ? [] : uniqueSorted(providers.filter((p) => p.categoryName.includes(service)).map((p) => p.serviceName)),
  };
}

export interface MapView {
  center: readonly [number, number];
  zoom: number;
}

const DISTRICT_ZOOM = 8;
export const ROMANIA_VIEW: Readonly<MapView> = Object.freeze({ center: [45.947808, 25.091419] as const, zoom: 7 });

export function districtView(district: string | null): MapView {
  const center = district ? DISTRICT_CENTERS[district] : undefined;
  return center ? { center, zoom: DISTRICT_ZOOM } : ROMANIA_VIEW;
}
