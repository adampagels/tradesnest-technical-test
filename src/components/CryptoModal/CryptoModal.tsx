import { FC } from "react";
import "./CryptoModal.css";
import { SetCoinFunction } from "../../types/types";
import { Coin } from "../../interfaces/interfaces";
import { formatPricing } from "../utils/index";
const upArrow: string = require("../../assets/upArrow.svg").default;
const downArrow: string = require("../../assets/downArrow.svg").default;

const CryptoModal: FC<{ coinData: Coin; setClickedCoin: SetCoinFunction }> = ({
  coinData,
  setClickedCoin,
}) => {
  const { name, symbol, image, price_change_percentage_24h, current_price } =
    coinData;

  let priceChangeDifference;
  let arrow;
  if (price_change_percentage_24h > 0) {
    priceChangeDifference = "positive";
    arrow = upArrow;
  } else if (price_change_percentage_24h < 0) {
    priceChangeDifference = "negative";
    arrow = downArrow;
  } else if (price_change_percentage_24h === 0) {
    priceChangeDifference = "neutral";
  }
  const shortenedPricePercentage = Number(price_change_percentage_24h).toFixed(
    2
  );
  const price =
    formatPricing.format(current_price) === "$0.00"
      ? `$${current_price}`
      : formatPricing.format(current_price);
  return (
    <div
      className="modal-background"
      onClick={() => {
        setClickedCoin(undefined);
      }}
    >
      <div className="modal-container">
        <div className="modal-close-button">
          <button
            onClick={() => {
              setClickedCoin(undefined);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-crypto-name-symbol-container">
          <h3 className="modal-crypto-name">{name}</h3>
          <h4 className="modal-crypto-symbol">{symbol}</h4>
        </div>
        <img
          className="modal-crypto-card-image"
          src={image}
          alt={`${name} logo`}
        ></img>
        <div className="modal-crypto-price-container">
          <h5 className="modal-crypto-current-price">USD {price}</h5>
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
