import { FC } from "react";
import "./CryptoCard.css";
import { Coin } from "../../interfaces/interfaces";
import { RemoveFunction, SetCoinFunction } from "../../types/types";

const CryptoCard: FC<{
  coinData: Coin;
  setClickedCoin: SetCoinFunction;
  removeCrypto: RemoveFunction;
}> = ({ coinData, setClickedCoin, removeCrypto }) => {
  const { name, symbol, image } = coinData;
  return (
    <div
      className="crypto-card"
      onClick={() => {
        setClickedCoin(coinData);
      }}
    >
      <div className="crypto-card-name-symbol-container">
        <h3 className="crypto-card-name">{name}</h3>
        <h4 className="crypto-card-symbol">{symbol}</h4>
      </div>
      <img className="crypto-card-image" src={image} alt={`${name} logo`}></img>
      <button
        className="crypto-card-delete-button"
        onClick={(event) => removeCrypto(event, coinData)}
      >
        Remove
      </button>
    </div>
  );
};

export default CryptoCard;
