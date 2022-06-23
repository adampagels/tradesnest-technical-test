import { FC } from "react";
import "./CryptoCard.css";

interface Coin {
  name: string;
  image: string;
  symbol: string;
  id: string;
}

const CryptoCard: FC<{ coinData: Coin }> = ({ coinData }) => {
  return (
    <div className="crypto-card">
      <div className="crypto-card-name-symbol-container">
        <h3 className="crypto-card-name">{coinData.name}</h3>
        <h4 className="crypto-card-symbol">{coinData.symbol}</h4>
      </div>
      <img className="crypto-card-image" src={coinData.image}></img>
    </div>
  );
};

export default CryptoCard;
