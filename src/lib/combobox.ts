export type NavigationKey = 'ArrowDown' | 'ArrowUp';

/** Index of the option to highlight after an arrow key, wrapping around (WAI-ARIA combobox pattern). */
export function nextActiveIndex(current: number | null, key: NavigationKey, count: number): number | null {
  if (count === 0) return null;
  if (current === null) return key === 'ArrowDown' ? 0 : count - 1;
  const step = key === 'ArrowDown' ? 1 : -1;
  return (current + step + count) % count;
}
