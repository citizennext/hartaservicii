const DATE_FORMAT = new Intl.DateTimeFormat('ro-RO', { timeZone: 'UTC', year: 'numeric', month: 'short', day: 'numeric' });

export function formatDate(value: string | null | undefined): string {
  if (!value) return '';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? '' : DATE_FORMAT.format(date);
}
