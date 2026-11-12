import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const parkingSpots = [
  { id: 1, name: "斗六市中山路", lat: 23.7092, lng: 120.5422, status: "空位" },
  { id: 2, name: "斗六市民生路", lat: 23.7110, lng: 120.5440, status: "已占用" },
  { id: 3, name: "斗六市文化路", lat: 23.7075, lng: 120.5390, status: "空位" }
];

export default function ParkingMap() {
  return (
    <MapContainer
      center={[23.7092, 120.5422]}
      zoom={15}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {parkingSpots.map((spot) => (
        <Marker key={spot.id} position={[spot.lat, spot.lng]}>
          <Popup>
            <strong>{spot.name}</strong>
            <p>狀態：{spot.status}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}