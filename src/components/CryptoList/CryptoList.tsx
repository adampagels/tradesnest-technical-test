import { FC, useEffect, useState } from "react";
import CryptoCard from "../CryptoCard/CryptoCard";
import useFetch from "../../hooks/UseFetch";
import CryptoModal from "../CryptoModal/CryptoModal";
import { Coin } from "../../interfaces/interfaces";
import Loader from "../Loader/Loader";

const CryptoList: FC<{}> = () => {
  const [clickedCoin, setClickedCoin] = useState<Coin>();
  const [cryptoList, setCryptoList] = useState<object>([]);

  const APIResponse = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
  );
  const { data } = APIResponse;

  const removeCrypto = (event: React.MouseEvent, coin: Coin) => {
    event.stopPropagation();

    {
      const filteredArray =
        cryptoList instanceof Array &&
        cryptoList.filter((coinFromList: Coin) => {
          return coinFromList !== coin;
        });
      setCryptoList(filteredArray as object);
    }
  };

  useEffect(() => {
    setCryptoList(data);
  }, [data]);

  return (
    <>
      {APIResponse.loading && <Loader />}
      {cryptoList instanceof Array &&
        cryptoList.map((coin: Coin) => {
          return (
            <CryptoCard
              key={coin.id}
              coinData={coin}
              setClickedCoin={setClickedCoin}
              removeCrypto={removeCrypto}
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
