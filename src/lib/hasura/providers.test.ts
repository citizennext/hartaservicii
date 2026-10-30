import { describe, expect, test } from 'vitest';
import { PROVIDERS_RESPONSE_SCHEMA, toMapProvider, toStatsProvider, type Provider } from './providers';

const RAW_PROVIDER = {
  id: 'p-1',
  name: 'Centrul de zi Sfânta Maria',
  coordinates: [46.88, 25],
  address: 'Str. Lungă 1',
  location: 'Brașov',
  district: 'Brașov',
  capacity: '40',
  email: null,
  phone: null,
  updatedAt: '2021-03-01T10:00:00+00:00',
  license_by: 'MMPS',
  license_date_5years: null,
  license_date_provisional: '2019-01-01',
  license_no: null,
  phones: [{ number: '0268 000 000' }],
  supplier: {
    name: 'DGASPC Brașov',
    cui_cif: '123',
    certificate_serial_no: 'AF 1',
    decision_date: '2018-01-01',
    decision_no: '12',
    supplier_type: { name: 'public', private: false },
  },
  service: {
    name: 'Centru de zi pentru copii',
    code: '8891 CZ-C-I',
    category: { name: 'Servicii sociale pentru copii' },
    service_offers: [{ offer: { id: 'o-1', name: 'consiliere' } }],
  },
};

describe('PROVIDERS_RESPONSE_SCHEMA', () => {
  test('parses a provider with nullable fields', () => {
    const parsed = PROVIDERS_RESPONSE_SCHEMA.parse({ providers: [RAW_PROVIDER] });
    expect(parsed.providers[0]?.supplier.supplier_type.private).toBe(false);
  });

  test('trims surrounding whitespace from provider names', () => {
    const parsed = PROVIDERS_RESPONSE_SCHEMA.parse({ providers: [{ ...RAW_PROVIDER, name: ' Adăpost ' }] });
    expect(parsed.providers[0]?.name).toBe('Adăpost');
  });

  test('rejects coordinates that are not a [lat, lng] pair', () => {
    const bad = { ...RAW_PROVIDER, coordinates: [46.88] };
    expect(() => PROVIDERS_RESPONSE_SCHEMA.parse({ providers: [bad] })).toThrow();
  });
});

describe('toMapProvider', () => {
  test('keeps only the fields the map and filters need', () => {
    const provider: Provider = PROVIDERS_RESPONSE_SCHEMA.parse({ providers: [RAW_PROVIDER] }).providers[0]!;

    expect(toMapProvider(provider)).toEqual({
      id: 'p-1',
      name: 'Centrul de zi Sfânta Maria',
      coordinates: [46.88, 25],
      district: 'Brașov',
      categoryName: 'Servicii sociale pentru copii',
      serviceName: 'Centru de zi pentru copii',
      isPrivate: false,
    });
  });
});

describe('toStatsProvider', () => {
  test('keeps the fields the statistics need', () => {
    const provider: Provider = PROVIDERS_RESPONSE_SCHEMA.parse({ providers: [RAW_PROVIDER] }).providers[0]!;
    expect(toStatsProvider(provider)).toEqual({
      district: 'Brașov',
      capacity: '40',
      categoryName: 'Servicii sociale pentru copii',
      isPrivate: false,
    });
  });
});
