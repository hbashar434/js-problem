const findMostFrequentElement = arr => {
    const frequencyCounter = {};
  
    for (const element of arr) {
      frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    }
  
    let mostFrequentElement;
    let maxFrequency = 0;
  
    for (const element in frequencyCounter) {
      if (frequencyCounter[element] > maxFrequency) {
        maxFrequency = frequencyCounter[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  };
  
  const array = [5, 5, 3, 1, 1, 4, 5, 4];
  const mostFrequent = findMostFrequentElement(array);
  console.log(mostFrequent);
  