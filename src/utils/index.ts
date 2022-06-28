const upArrow: string = require("../assets/upArrow.svg").default;
const downArrow: string = require("../assets/downArrow.svg").default;

export const formatPricing = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const setPriceDifference = (dayPriceDifference: number) => {
  let arrow;
  let priceChangeDifference;
  if (dayPriceDifference > 0) {
    priceChangeDifference = "positive";
    arrow = upArrow;
  } else if (dayPriceDifference < 0) {
    priceChangeDifference = "negative";
    arrow = downArrow;
  } else if (dayPriceDifference === 0) {
    priceChangeDifference = "neutral";
  }

  return { priceArrow: arrow, priceChangeDifference: priceChangeDifference };
};
