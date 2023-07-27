const secondSmallest = (array) => {
  let smallest = array[0];
  let secondSmallest = array[1];

  for (let i = 2; i < array.length; i++) {
    if (array[i] < smallest) {
      secondSmallest = smallest;
      smallest = array[i];
    } else if (array[i] > smallest && array[i] < secondSmallest) {
      secondSmallest = array[i];
    }
  }

  return secondSmallest;
};

const secondSmallestNumber = secondSmallest([1, 5, 3, 4]);
console.log(secondSmallestNumber);
