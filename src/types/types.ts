import { Coin } from "../interfaces/interfaces";

export type RemoveFunction = (
  event: React.MouseEvent<HTMLElement>,
  coinData: Coin
) => void;

export type SetCoinFunction = (coinData: Coin | undefined) => void;
