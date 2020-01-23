//https://www.hackerrank.com/challenges/mark-and-toys/problem

const maximumToys = (prices, k) => {

  let sortedPrices = prices.sort((a, b) => a - b);
  let toyCount = 0;
  let remainingFunds = k;

  for (let i = 0; i < sortedPrices.length; i ++) {
    const toyPrice = sortedPrices[i];

    if (toyPrice > remainingFunds) {
      return toyCount;
    } else if (toyPrice <= remainingFunds) {
      remainingFunds -= toyPrice;
      toyCount++;
    }
  }
  return toyCount;
}
  
// -----------------------------------------end of code

const arr = [ 1, 12, 5, 111, 200, 1000, 10 ];
const int = 50; 

// Output = 4

console.log(maximumToys(arr, int))