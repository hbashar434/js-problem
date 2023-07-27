const romanToInt = (roman) => {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentNumeral = romanNumerals[roman[i]];
    const nextNumeral = romanNumerals[roman[i + 1]];

    if (nextNumeral > currentNumeral) {
      result += nextNumeral - currentNumeral;
      i++;
    } else {
      result += currentNumeral;
    }
  }

  return result;
};

const integerValue = romanToInt("X");
console.log(integerValue);
