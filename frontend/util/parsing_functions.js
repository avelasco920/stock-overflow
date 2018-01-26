export const stringifyToFloatNoCommas = (num, places) => {
  return parseFloat(Math
    .round(num * 100) / 100)
    .toFixed(places);
};

export const stringifyToFloat = (num) => {
  let str = stringifyToFloatNoCommas(num, 2);
  if (str === "NaN") return "0";
  const splitNum = str.split(".");
  const withCommas = addCommas(splitNum[0]);
  return withCommas + "." + splitNum[1];
};

export const stringifyToInteger = (num) => {
  let str = stringifyToFloatNoCommas(num, 2);
  const splitNum = str.split(".");
  return addCommas(splitNum[0]);
};

const addCommas = (num) => {
  let wholeNumsReversed = num.split("").reverse();
  let wholeNumsWithCommas = [];
  wholeNumsReversed.forEach((n, i) => {
    if ((i + 1) % 3 === 0 && wholeNumsReversed[i + 1]) {
      wholeNumsWithCommas += n + ",";
    } else {
      wholeNumsWithCommas += n;
    }
  });
  return wholeNumsWithCommas.split("").reverse().join("");
};

export const timeAgo = rubyDate => {
  const javaDate = new Date(rubyDate);
  const today = new Date();
  const numDays = Math.floor((today - javaDate) / (1000*60*60*24)).toString();
  return numDays + " days ago";
};

export const getSymbol = data => (
  data["Meta Data"]["2. Symbol"]
);

const getTime = (data, timeSeries) => {
  const series = `Time Series (${timeSeries})`;
  return Object.keys(data[series]).reverse();
};

export const getPrices = (data, timeSeries) => {
  const series = `Time Series (${timeSeries})`;
  const seriesObjects = Object.values(data[series]).reverse();
  return seriesObjects.map(obj => obj["4. close"]);
};

export const parseRealData = (data, timeSeries) => {
  const symbol = getSymbol(data);
  const time = getTime(data, timeSeries);
  const prices = getPrices(data, timeSeries);
  let series;
  series = timeSeries === "Daily" ? "daily" : "intraday";
  return {[symbol]: { [series]: { time, prices }}};
};

export const convertIntrinioResultToArray = (data, symbol)  => {
  const time = data.map( obj => obj.date );
  const prices = data.map( obj => obj.value );
  return {[symbol]: { ["daily"]: { time, prices }}};
};
