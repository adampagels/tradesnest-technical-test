import "./App.css";
import CryptoList from "./components/CryptoList/CryptoList";

function App() {
  return (
    <div className="app">
      <h1 className="app-page-header">Top 15 Crypto List</h1>
      <h2 className="app-page-subheader">Technical Test for Tradesnest</h2>
      <CryptoList />
    </div>
  );
}

export default App;
