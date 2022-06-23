import { FC, useState } from "react";
import CryptoCard from "../CryptoCard/CryptoCard";
import useFetch from "../../hooks/UseFetch";
import CryptoModal from "../CryptoModal/CryptoModal";

const CryptoList: FC<{}> = () => {
  const [clickedCoin, setClickedCoin] = useState<any>(null);

  const APIResponse = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
  );
  const { data } = APIResponse;

  return (
    <>
      {data instanceof Array &&
        data.map((coin: any) => {
          return (
            <CryptoCard
              key={coin.id}
              coinData={coin}
              setClickedCoin={setClickedCoin}
            />
          );
        })}
      {clickedCoin && (
        <CryptoModal coinData={clickedCoin} setClickedCoin={setClickedCoin} />
      )}
    </>
  );
};

export default CryptoList;
