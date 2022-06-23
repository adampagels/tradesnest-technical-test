import { FC } from "react";
import "./CryptoCard.css";

interface Coin {
  name: string;
  image: string;
  symbol: string;
  id: string;
}

const CryptoCard: FC<{
  coinData: Coin;
  setClickedCoin: any;
  removeCrypto: any;
}> = ({ coinData, setClickedCoin, removeCrypto }) => {
  return (
    <div
      className="crypto-card"
      onClick={() => {
        setClickedCoin(coinData);
      }}
    >
      <div className="crypto-card-name-symbol-container">
        <h3 className="crypto-card-name">{coinData.name}</h3>
        <h4 className="crypto-card-symbol">{coinData.symbol}</h4>
      </div>
      <img
        className="crypto-card-image"
        src={coinData.image}
        alt={`${coinData.name} logo`}
      ></img>
      <button
        className="crypto-card-delete-button"
        onClick={(e) => removeCrypto(e, coinData)}
      >
        Remove
      </button>
    </div>
  );
};

export default CryptoCard;
