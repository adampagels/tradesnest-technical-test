import useFetch from "../hooks/UseFetch";

export const FetchedCoinList = () => {
  return useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
  );
};
