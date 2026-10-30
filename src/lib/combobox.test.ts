import { describe, expect, test } from 'vitest';
import { nextActiveIndex } from './combobox';

describe('nextActiveIndex', () => {
  test('ArrowDown moves to the first option, then wraps after the last', () => {
    expect(nextActiveIndex(null, 'ArrowDown', 3)).toBe(0);
    expect(nextActiveIndex(1, 'ArrowDown', 3)).toBe(2);
    expect(nextActiveIndex(2, 'ArrowDown', 3)).toBe(0);
  });

  test('ArrowUp moves to the last option, then wraps before the first', () => {
    expect(nextActiveIndex(null, 'ArrowUp', 3)).toBe(2);
    expect(nextActiveIndex(0, 'ArrowUp', 3)).toBe(2);
    expect(nextActiveIndex(2, 'ArrowUp', 3)).toBe(1);
  });

  test('has no active option when the list is empty', () => {
    expect(nextActiveIndex(null, 'ArrowDown', 0)).toBeNull();
    expect(nextActiveIndex(4, 'ArrowUp', 0)).toBeNull();
  });
});
