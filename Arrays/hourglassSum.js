// https://www.hackerrank.com/challenges/2d-array/problem

const hourglassSum = (arr) => {
  let highestSum = -Infinity;
  
    for (let i = 0; i < arr.length - 2; i ++) {
      const curArr = arr[i];
  
      for (let j = 0; j < curArr.length - 2; j ++) {
        const sum = sumOfOneHourGlass(arr, i, j);
  
        if (sum >  highestSum) {
          highestSum = sum;
        }
      }
    }
  return highestSum;
  
}
  
const sumOfOneHourGlass = (arr, row, column) => {
  let sumOfRow1 = arr[row][column] + arr[row][column + 1] + arr[row][column + 2];
  let sumOfRow2 = arr[row + 1][column + 1];
  let sumOfRow3 = arr[row + 2][column] + arr[row + 2][column + 1] + arr[row + 2][column + 2];

  return sumOfRow1 + sumOfRow2 + sumOfRow3;
}

// -----------------------------------------end of code

const input = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

// Output = 19
  
console.log(hourglassSum(input))