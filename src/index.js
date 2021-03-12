module.exports = function toReadable(number) {

  const units = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };
  const firstTen = {
    0: "ten",
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen"
  };

  const dozens = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
  };

  function getHundred(num) {
    const hun = Math.floor(num / 100);
    return hun === 0 ? '' : `${units[hun]} hundred`
  }

  function getTen(num) {
    const ten = Math.floor((num % 100) / 10)
    if (ten === 0) return '';
    return ten === 1 ? firstTen[num % 10] : dozens[ten]
  }

  function getUnit(num) {
    if (num === 0) return 'zero';
    return Math.floor((num % 100) / 10) === 1 ? '' : units[num % 10];
  }

  return `${getHundred(number)} ${getTen(number)} ${getUnit(number)}`.replace(/\s+/g, ' ').trim()
}

