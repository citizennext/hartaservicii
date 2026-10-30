import { describe, expect, test } from 'vitest';
import {
  EMPTY_FILTERS,
  ROMANIA_VIEW,
  districtView,
  filterOptions,
  filterProviders,
  filtersFromSearch,
  filtersToSearch,
  type MapProvider,
} from './filters';

const PROVIDERS: readonly MapProvider[] = [
  {
    id: '1',
    name: 'Centru copii Cluj',
    coordinates: [46.77, 23.6],
    district: 'Cluj',
    categoryName: 'Servicii sociale pentru copii',
    serviceName: 'Centru de zi',
    isPrivate: false,
  },
  {
    id: '2',
    name: 'Cămin vârstnici Iași',
    coordinates: [47.16, 27.58],
    district: 'Iași',
    categoryName: 'Servicii sociale pentru persoane vârstnice',
    serviceName: 'Cămin pentru persoane vârstnice',
    isPrivate: true,
  },
  {
    id: '3',
    name: 'Adăpost Cluj',
    coordinates: [46.78, 23.61],
    district: 'Cluj',
    categoryName: 'Servicii sociale pentru persoane fără adăpost',
    serviceName: 'Adăpost de noapte',
    isPrivate: false,
  },
];

const ids = (providers: readonly MapProvider[]) => providers.map((p) => p.id);

describe('filterProviders', () => {
  test('returns all providers when no filter is set', () => {
    expect(ids(filterProviders(PROVIDERS, EMPTY_FILTERS))).toEqual(['1', '2', '3']);
  });

  test('filters by district substring', () => {
    expect(ids(filterProviders(PROVIDERS, { ...EMPTY_FILTERS, district: 'Cluj' }))).toEqual(['1', '3']);
  });

  test('filters by age group (category) against the category name', () => {
    expect(ids(filterProviders(PROVIDERS, { ...EMPTY_FILTERS, category: 'copii' }))).toEqual(['1']);
  });

  test('filters by service against the category name', () => {
    expect(ids(filterProviders(PROVIDERS, { ...EMPTY_FILTERS, service: 'fără adăpost' }))).toEqual(['3']);
  });

  test('filters by specialization against the service name', () => {
    expect(ids(filterProviders(PROVIDERS, { ...EMPTY_FILTERS, specialization: 'Cămin' }))).toEqual(['2']);
  });

  test('filters private providers', () => {
    expect(ids(filterProviders(PROVIDERS, { ...EMPTY_FILTERS, administrator: true }))).toEqual(['2']);
  });

  test('filters public providers (legacy bug: false was ignored)', () => {
    expect(ids(filterProviders(PROVIDERS, { ...EMPTY_FILTERS, administrator: false }))).toEqual(['1', '3']);
  });

  test('combines filters with AND', () => {
    const filters = { ...EMPTY_FILTERS, district: 'Cluj', service: 'copii' };
    expect(ids(filterProviders(PROVIDERS, filters))).toEqual(['1']);
  });

  test('does not mutate the input list', () => {
    const input = [...PROVIDERS];
    filterProviders(input, { ...EMPTY_FILTERS, district: 'Iași' });
    expect(input).toEqual(PROVIDERS);
  });
});

describe('filtersFromSearch', () => {
  test('parses known keys and booleans', () => {
    expect(filtersFromSearch('?district=Cluj&administrator=false&foo=bar')).toEqual({
      ...EMPTY_FILTERS,
      district: 'Cluj',
      administrator: false,
    });
  });

  test('treats invalid administrator values as unset', () => {
    expect(filtersFromSearch('?administrator=maybe')).toEqual(EMPTY_FILTERS);
  });

  test('returns empty filters for an empty query string', () => {
    expect(filtersFromSearch('')).toEqual(EMPTY_FILTERS);
  });
});

describe('filtersToSearch', () => {
  test('serialises only set filters', () => {
    expect(filtersToSearch({ ...EMPTY_FILTERS, district: 'Iași', administrator: false })).toBe(
      '?district=Ia%C8%99i&administrator=false'
    );
  });

  test('returns an empty string when nothing is set', () => {
    expect(filtersToSearch(EMPTY_FILTERS)).toBe('');
  });

  test('round-trips through filtersFromSearch', () => {
    const filters = { ...EMPTY_FILTERS, category: 'copii', specialization: 'Centru de zi', administrator: true };
    expect(filtersFromSearch(filtersToSearch(filters))).toEqual(filters);
  });
});

describe('filterOptions', () => {
  test('lists unique districts and service categories, sorted for Romanian', () => {
    const options = filterOptions(PROVIDERS, EMPTY_FILTERS);
    expect(options.districts).toEqual(['Cluj', 'Iași']);
    expect(options.services).toEqual([
      'Servicii sociale pentru copii',
      'Servicii sociale pentru persoane fără adăpost',
      'Servicii sociale pentru persoane vârstnice',
    ]);
  });

  test('has no specializations until a service is chosen', () => {
    expect(filterOptions(PROVIDERS, EMPTY_FILTERS).specializations).toEqual([]);
  });

  test('lists specializations belonging to the chosen service', () => {
    const options = filterOptions(PROVIDERS, { ...EMPTY_FILTERS, service: 'Servicii sociale pentru copii' });
    expect(options.specializations).toEqual(['Centru de zi']);
  });
});

describe('districtView', () => {
  test('centres on the selected district at a closer zoom', () => {
    expect(districtView('Cluj')).toEqual({ center: [46.766667, 23.6], zoom: 8 });
  });

  test('knows districts the legacy coordinates file missed or misspelled', () => {
    expect(districtView('Ilfov').zoom).toBe(8);
    expect(districtView('Bistrița Năsăud').zoom).toBe(8);
  });

  test('falls back to the whole country for unknown or empty districts', () => {
    expect(districtView(null)).toEqual(ROMANIA_VIEW);
    expect(districtView('Atlantida')).toEqual(ROMANIA_VIEW);
  });
});
