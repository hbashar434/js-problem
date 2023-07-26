function onlyPositive(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

const numbers = [1, 2, -6, -9, 10];
const displayPositiveNumber = onlyPositive(numbers);
console.log(displayPositiveNumber);
