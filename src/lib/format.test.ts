import { describe, expect, test } from 'vitest';
import { formatDate } from './format';

describe('formatDate', () => {
  test('formats ISO dates as short Romanian UTC dates', () => {
    expect(formatDate('2020-04-15T19:56:48.627+00:00')).toBe('15 apr. 2020');
  });

  test('uses UTC so late-evening timestamps do not roll over', () => {
    expect(formatDate('2020-12-31T23:30:00+00:00')).toBe('31 dec. 2020');
  });

  test('returns an empty string for missing or invalid dates', () => {
    expect(formatDate(null)).toBe('');
    expect(formatDate('not a date')).toBe('');
  });
});
