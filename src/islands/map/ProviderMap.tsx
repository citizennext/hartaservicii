import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker } from 'react-leaflet';
import { BaseTileLayer } from './BaseTileLayer';
import { MARKER_ICON } from './icons';

interface ProviderMapProps {
  coordinates: [number, number];
}

const PROVIDER_ZOOM = 17;
const MIN_WIDTH_FOR_ZOOM_CONTROL = 768;

export default function ProviderMap({ coordinates }: ProviderMapProps) {
  return (
    <MapContainer
      center={coordinates}
      zoom={PROVIDER_ZOOM}
      scrollWheelZoom={false}
      zoomControl={window.innerWidth >= MIN_WIDTH_FOR_ZOOM_CONTROL}
      className="markercluster-map-single markercluster-map">
      <BaseTileLayer />
      <Marker position={coordinates} icon={MARKER_ICON} />
    </MapContainer>
  );
}
