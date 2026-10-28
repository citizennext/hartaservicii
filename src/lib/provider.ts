const EMPTY = '-';

export function orDash(value: string | null | undefined): string {
  return value?.trim() ? value : EMPTY;
}

export function fullAddress(provider: { address: string; location: string; district: string }): string {
  return [provider.address, provider.location, provider.district].filter((part) => part.trim()).join(', ');
}

export function licenseDate(provider: { license_date_5years: string | null; license_date_provisional: string | null }): string {
  return orDash(provider.license_date_5years ?? provider.license_date_provisional);
}

export function directionsUrl([lat, lng]: readonly [number, number]): string {
  const params = new URLSearchParams({ api: '1', query: `${lat},${lng}` });
  return `https://www.google.com/maps/search/?${params}`;
}
