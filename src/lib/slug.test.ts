import { describe, expect, test } from 'vitest';
import { providerPath, slugify } from './slug';

describe('slugify', () => {
  test('transliterates Romanian diacritics like the legacy site', () => {
    expect(slugify('Centrul de zi Sfânta Maria – Brașov')).toBe('centrul-de-zi-sfanta-maria-brasov');
  });

  test('handles cedilla and comma-below variants of ș and ț', () => {
    expect(slugify('Ţară şi Țară și')).toBe('tara-si-tara-si');
  });
});

describe('providerPath', () => {
  test('builds the legacy /harta/serviciu/<slug>/<id>/ URL', () => {
    expect(providerPath({ id: 'abc-123', name: 'Casa Ion' })).toBe('/harta/serviciu/casa-ion/abc-123/');
  });
});
