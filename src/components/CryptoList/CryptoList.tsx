import { FC, useEffect, useState } from "react";
import CryptoCard from "../CryptoCard/CryptoCard";
import useFetch from "../../hooks/UseFetch";
import CryptoModal from "../CryptoModal/CryptoModal";

const CryptoList: FC<{}> = () => {
  const [clickedCoin, setClickedCoin] = useState<any>(null);
  const [cryptoList, setCryptoList] = useState<any>(null);

  const APIResponse = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
  );
  const { data } = APIResponse;

  const removeCrypto = (e: any, coin: any) => {
    e.stopPropagation();
    {
      const filteredArray =
        cryptoList instanceof Array &&
        cryptoList.filter((x: any) => {
          return x !== coin;
        });
      setCryptoList(filteredArray);
    }
  };

  useEffect(() => {
    setCryptoList(data);
  }, [data]);

  return (
    <>
      {cryptoList instanceof Array &&
        cryptoList.map((coin: any) => {
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
