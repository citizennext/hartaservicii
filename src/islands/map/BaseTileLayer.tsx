import { PUBLIC_TILE_URL } from 'astro:env/client';
import { TileLayer } from 'react-leaflet';

const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

/**
 * OSM's tile usage policy rejects requests without a Referer. The legacy site sent
 * `Referrer-Policy: same-origin`, which stripped it and left the map blank — so we
 * set the policy on the tiles explicitly.
 */
export function BaseTileLayer() {
  return <TileLayer url={PUBLIC_TILE_URL} attribution={ATTRIBUTION} referrerPolicy="strict-origin-when-cross-origin" />;
}
