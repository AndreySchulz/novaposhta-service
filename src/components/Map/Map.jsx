import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = data => {
  const { lat, long, name } = data;
  const position = [lat, long];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: '100%', height: '400px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
