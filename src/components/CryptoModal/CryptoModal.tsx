import { FC } from "react";
import "./CryptoModal.css";
import { SetCoinFunction } from "../../types/types";
import { Coin } from "../../interfaces/interfaces";
import { formatPricing, setPriceDifference } from "../../utils/index";

const CryptoModal: FC<{ coinData: Coin; setClickedCoin: SetCoinFunction }> = ({
  coinData,
  setClickedCoin,
}) => {
  const { name, symbol, image, price_change_percentage_24h, current_price } =
    coinData;

  const { priceArrow, priceChangeDifference } = setPriceDifference(
    price_change_percentage_24h
  );

  const formattedPricePercentage = price_change_percentage_24h.toFixed(2);

  // do not format price if formatted price will equal "$0.00"
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
              src={priceArrow}
              alt="arrow to show price increase or decrease"
            />
            <h6
              className={`modal-crypto-price-change-percentage ${priceChangeDifference}`}
            >
              {formattedPricePercentage}%
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoModal;
