import { FC } from "react";

interface Coin {
  name: string;
  image: string;
  symbol: string;
  id: string;
}

const CryptoCard: FC<{ coinData: Coin }> = ({ coinData }) => {
  return (
    <div className="crypto-card">
      <h3 className="crypto-card-name">{coinData.name}</h3>
      <h4 className="crypto-card-symbol">{coinData.symbol}</h4>
      <img className="crypto-card-image" src={coinData.image}></img>
    </div>
  );
};

export default CryptoCard;
