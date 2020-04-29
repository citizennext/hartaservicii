export function formatNumber(number: number) {
  return new Intl.NumberFormat('ro-RO').format(number);
}
