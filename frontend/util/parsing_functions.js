export const stringifyToFloatNoCommas = (num) => {
  return parseFloat(Math
    .round(num * 100) / 100)
    .toFixed(2);
};

export const stringifyToFloat = (num) => {
  let str = stringifyToFloatNoCommas(num);
  if (str === "NaN") return "0";
  const splitNum = str.split(".");
  const withCommas = addCommas(splitNum[0]);
  return withCommas + "." + splitNum[1];
};

export const stringifyToInteger = (num) => {
  let str = stringifyToFloatNoCommas(num);
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
