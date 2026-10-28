import 'leaflet/dist/leaflet.css';
import 'react-leaflet-cluster/dist/assets/MarkerCluster.css';
import { useEffect, useMemo, useState } from 'react';
import { MapContainer, Marker, Tooltip, ZoomControl, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import {
  districtView,
  filterOptions,
  filterProviders,
  filtersFromSearch,
  filtersToSearch,
  type MapFilters as Filters,
  type MapProvider,
  type MapView,
} from '../../lib/filters';
import { providerPath } from '../../lib/slug';
import { BaseTileLayer } from './BaseTileLayer';
import { MARKER_ICON, createClusterIcon } from './icons';
import { MapFilters } from './MapFilters';
import { useProviders } from './useProviders';

const MAX_ZOOM = 20;
const NO_PROVIDERS: readonly MapProvider[] = [];

function ViewController({ view }: { view: MapView }) {
  const map = useMap();
  useEffect(() => {
    map.setView(view.center as [number, number], view.zoom);
  }, [map, view]);
  return null;
}

export default function MapApp() {
  const state = useProviders();
  const [filters, setFilters] = useState<Filters>(() => filtersFromSearch(window.location.search));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const providers = state.status === 'ready' ? state.providers : NO_PROVIDERS;
  const visible = useMemo(() => filterProviders(providers, filters), [providers, filters]);
  const options = useMemo(() => filterOptions(providers, filters), [providers, filters]);
  const view = useMemo(() => districtView(filters.district), [filters.district]);

  const updateFilters = (patch: Partial<Filters>) => {
    const next = { ...filters, ...patch };
    setFilters(next);
    window.history.replaceState(null, '', `${window.location.pathname}${filtersToSearch(next)}`);
  };

  return (
    <>
      <MapContainer
        center={view.center as [number, number]}
        zoom={view.zoom}
        maxZoom={MAX_ZOOM}
        zoomControl={false}
        className="markercluster-map">
        <ViewController view={view} />
        <BaseTileLayer />
        <MarkerClusterGroup chunkedLoading showCoverageOnHover={false} iconCreateFunction={createClusterIcon}>
          {visible.map((provider) => (
            <Marker
              key={provider.id}
              position={provider.coordinates as [number, number]}
              icon={MARKER_ICON}
              eventHandlers={{ click: () => window.location.assign(providerPath(provider)) }}>
              <Tooltip>{provider.name}</Tooltip>
            </Marker>
          ))}
        </MarkerClusterGroup>
        <ZoomControl position="bottomright" />
      </MapContainer>

      {state.status === 'loading' && (
        <div className="map-status" role="status">
          Se încarcă serviciile…
        </div>
      )}
      {state.status === 'error' && (
        <div className="map-status map-status-error" role="alert">
          {state.message}
        </div>
      )}

      <button
        type="button"
        className="filter-menu md:hidden"
        data-open={isDrawerOpen}
        aria-expanded={isDrawerOpen}
        aria-controls="map-filters"
        aria-label="Filtre"
        onClick={() => setIsDrawerOpen(true)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M2.28906 2L10.2891 10L2.28906 18" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" />
        </svg>
      </button>
      <div id="map-filters" className="map-filters-panel" data-open={isDrawerOpen}>
        <button
          type="button"
          className="map-filters-close md:hidden"
          aria-label="Închide filtrele"
          onClick={() => setIsDrawerOpen(false)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M2.28906 2L10.2891 10L2.28906 18"
              stroke="white"
              strokeWidth="4"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <MapFilters filters={filters} options={options} total={visible.length} onChange={updateFilters} />
      </div>
    </>
  );
}
