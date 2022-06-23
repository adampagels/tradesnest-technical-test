import { FC } from "react";
import "./CryptoModal.css";

const CryptoModal: FC<{ coinData: any; setClickedCoin: any }> = ({
  coinData,
  setClickedCoin,
}) => {
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
          <h6 className="modal-crypto-price-change-percentage">
            {coinData.price_change_percentage_24h}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CryptoModal;
