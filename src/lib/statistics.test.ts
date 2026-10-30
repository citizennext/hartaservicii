import { describe, expect, test } from 'vitest';
import { choropleth, computeStatistics, type StatsProvider } from './statistics';

const provider = (overrides: Partial<StatsProvider>): StatsProvider => ({
  district: 'Cluj',
  capacity: null,
  categoryName: 'Servicii sociale pentru persoane vârstnice',
  isPrivate: false,
  ...overrides,
});

describe('computeStatistics', () => {
  const PROVIDERS: readonly StatsProvider[] = [
    provider({ district: 'Cluj', capacity: '10', categoryName: 'Servicii sociale pentru copii' }),
    provider({ district: 'Cluj', capacity: '5', isPrivate: true }),
    provider({ district: 'Iași', capacity: 'n/a', categoryName: 'Servicii sociale pentru persoane fără adăpost' }),
    provider({ district: 'Iași', capacity: '20', categoryName: 'Servicii sociale pentru copii', isPrivate: true }),
  ];
  const SUPPLIERS = [{ isPrivate: true }, { isPrivate: false }, { isPrivate: false }];

  test('counts public and private providers', () => {
    const stats = computeStatistics(PROVIDERS, SUPPLIERS);
    expect(stats.providers).toEqual({ total: 4, public: 2, private: 2 });
  });

  test('counts public and private suppliers', () => {
    expect(computeStatistics(PROVIDERS, SUPPLIERS).suppliers).toEqual({ total: 3, public: 2, private: 1 });
  });

  test('counts providers per district, overall and for homeless/children categories', () => {
    const stats = computeStatistics(PROVIDERS, SUPPLIERS);
    expect(stats.byDistrict.all).toEqual({ Cluj: 2, Iași: 2 });
    expect(stats.byDistrict.homeless).toEqual({ Iași: 1 });
    expect(stats.byDistrict.children).toEqual({ Cluj: 1, Iași: 1 });
    expect(stats.homeless).toBe(1);
    expect(stats.children).toBe(2);
  });

  test('sums numeric capacity per district, ignoring non-numeric or missing values', () => {
    expect(computeStatistics(PROVIDERS, SUPPLIERS).capacityByDistrict).toEqual({ Cluj: 15, Iași: 20 });
  });

  test('takes the first number from free-text capacities, like the legacy map', () => {
    const stats = computeStatistics([provider({ capacity: 'aprox. 40 locuri' }), provider({ capacity: '12+3' })], []);
    expect(stats.capacityByDistrict).toEqual({ Cluj: 52 });
  });

  test('returns zeroed statistics for empty input', () => {
    const stats = computeStatistics([], []);
    expect(stats.providers).toEqual({ total: 0, public: 0, private: 0 });
    expect(stats.byDistrict.all).toEqual({});
  });
});

describe('choropleth', () => {
  const DISTRICTS = ['Cluj', 'Iași', 'Ilfov'];

  test('shades each district by its share of the maximum, with missing districts at zero', () => {
    const result = choropleth({ Cluj: 10, Iași: 5 }, DISTRICTS);

    expect(result.max).toBe(10);
    expect(result.districts).toEqual([
      { name: 'Cluj', value: 10, fill: 'hsl(177, 35%, 42%)' },
      { name: 'Iași', value: 5, fill: 'hsl(177, 35%, 71%)' },
      { name: 'Ilfov', value: 0, fill: 'hsl(177, 35%, 100%)' },
    ]);
  });

  test('renders every district white when there is no data', () => {
    const result = choropleth({}, DISTRICTS);
    expect(result.max).toBe(0);
    expect(result.districts.every((d) => d.fill === 'hsl(177, 35%, 100%)')).toBe(true);
  });
});
