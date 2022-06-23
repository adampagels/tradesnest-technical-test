import { FC } from "react";
import "./CryptoModal.css";
// const upArrow = require("../../assets/upArrow.svg") as string;
const upArrow: string = require("../../assets/upArrow.svg").default;
const downArrow: string = require("../../assets/downArrow.svg").default;

const CryptoModal: FC<{ coinData: any; setClickedCoin: any }> = ({
  coinData,
  setClickedCoin,
}) => {
  let priceChangeDifference;
  let arrow;
  if (coinData.price_change_percentage_24h > 0) {
    priceChangeDifference = "positive";
    arrow = upArrow;
  } else if (coinData.price_change_percentage_24h < 0) {
    priceChangeDifference = "negative";
    arrow = downArrow;
  } else if (coinData.price_change_percentage_24h === 0) {
    priceChangeDifference = "neutral";
  }
  const shortenedPricePercentage = Number(
    coinData.price_change_percentage_24h
  ).toFixed(2);

  return (
    <div
      className="modal-background"
      onClick={() => {
        setClickedCoin(null);
      }}
    >
      <div className="modal-container">
        <div className="modal-close-button">
          <button
            onClick={() => {
              setClickedCoin(null);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-crypto-name-symbol-container">
          <h3 className="modal-crypto-name">{coinData.name}</h3>
          <h4 className="modal-crypto-symbol">{coinData.symbol}</h4>
        </div>
        <img
          className="modal-crypto-card-image"
          src={coinData.image}
          alt={`${coinData.name} logo`}
        ></img>
        <div className="modal-crypto-price-container">
          <h5 className="modal-crypto-current-price">
            USD ${coinData.current_price}
          </h5>
          <div className="modal-crypto-price-percentage-container">
            <img
              className="modal-crypto-price-arrow"
              src={arrow}
              alt="arrow to show price increase or decrease"
            />
            <h6
              className={`modal-crypto-price-change-percentage ${priceChangeDifference}`}
            >
              {shortenedPricePercentage}%
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoModal;
