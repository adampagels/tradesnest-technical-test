import { FC, useEffect, useState } from "react";
import CryptoCard from "../CryptoCard/CryptoCard";
import CryptoModal from "../CryptoModal/CryptoModal";
import { Coin } from "../../interfaces/interfaces";
import Loader from "../Loader/Loader";
import EmptyList from "../EmptyList/EmptyList";
import { FetchedCoinList } from "../../services/dataService";

const CryptoList: FC<{}> = () => {
  const [clickedCoin, setClickedCoin] = useState<Coin>();
  const [cryptoList, setCryptoList] = useState<object>([]);

  const { data, loading } = FetchedCoinList();

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
      {!loading && cryptoList instanceof Array && cryptoList.length === 0 && (
        <EmptyList />
      )}

      {loading && <Loader />}

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
