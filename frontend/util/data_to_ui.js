export const stringifyIntegerNoCommas = (num) => {
  return parseFloat(Math
    .round(num * 100) / 100)
    .toFixed(2);
  };

export const stringifyInteger = (num) => {
  let str = stringifyIntegerNoCommas(num);
  const splitNum = str.split(".");
  const withCommas = addCommas(splitNum[0]);
  return "$" + withCommas + "." + splitNum[1];
};

const addCommas = (num) => {
  let wholeNumsReversed = num.split("").reverse();
  let wholeNumsWithCommas = [];
  wholeNumsReversed.forEach((n, i) => {
    if ((i + 1) % 3 === 0) {
      wholeNumsWithCommas += n + ",";
    } else {
      wholeNumsWithCommas += n;
    }
  });
  return wholeNumsWithCommas.split("").reverse().join("");
};

stringifyInteger(10269.8);
