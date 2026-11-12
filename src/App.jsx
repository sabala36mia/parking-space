
import ParkingMap from "./components/ParkingMap";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🚗 雲林智慧停車</h1>
        <p>雲林縣路邊停車格動態查詢平台</p>
      </header>

      <main className="container">
        <section className="stats">
          <div className="stat-card">
            <h3>總停車格</h3>
            <p>載入中</p>
          </div>

          <div className="stat-card">
            <h3>可用車位</h3>
            <p>載入中</p>
          </div>

          <div className="stat-card">
            <h3>已占用</h3>
            <p>載入中</p>
          </div>
        </section>

        <section className="map-section">
          <h2>雲林縣停車格地圖</h2>
          <ParkingMap />
        </section>
      </main>
    </div>
  );
}

export default App;
