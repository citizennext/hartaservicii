import { describe, expect, test } from 'vitest';
import { directionsUrl, fullAddress, licenseDate, orDash } from './provider';

describe('orDash', () => {
  test('returns the value or a dash for empty values', () => {
    expect(orDash('40')).toBe('40');
    expect(orDash(null)).toBe('-');
    expect(orDash('  ')).toBe('-');
  });
});

describe('fullAddress', () => {
  test('joins address, locality and district, skipping empty parts', () => {
    expect(fullAddress({ address: 'Str. Lungă 1', location: 'Brașov', district: 'Brașov' })).toBe('Str. Lungă 1, Brașov, Brașov');
    expect(fullAddress({ address: '', location: 'Sat Nou', district: 'Iași' })).toBe('Sat Nou, Iași');
  });
});

describe('licenseDate', () => {
  test('prefers the 5-year license date over the provisional one', () => {
    expect(licenseDate({ license_date_5years: '2021-01-01', license_date_provisional: '2019-01-01' })).toBe('2021-01-01');
    expect(licenseDate({ license_date_5years: null, license_date_provisional: '2019-01-01' })).toBe('2019-01-01');
    expect(licenseDate({ license_date_5years: null, license_date_provisional: null })).toBe('-');
  });
});

describe('directionsUrl', () => {
  test('builds a Google Maps search URL for the coordinates', () => {
    expect(directionsUrl([46.88, 25.45])).toBe('https://www.google.com/maps/search/?api=1&query=46.88%2C25.45');
  });
});
