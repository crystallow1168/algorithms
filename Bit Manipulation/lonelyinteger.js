// https://www.hackerrank.com/challenges/lonely-integer/problem

const lonelyinteger = (a) => {
  let storage = {};

  for ( let i = 0; i < a.length; i ++ ) {
    const cur = a[i];

    if (!storage[cur]) {
      storage[cur] = 1;
    } else {
      storage[cur]++;
    }
  }

  for (let key in storage) {
    if (storage[key] === 1) {
      return key;
    }
  }
}


// -----------------------------------------end of code

const input = [1] // Output: 1
const input1 = [1, 1, 2]; // Output: 2
const input2 = [0, 0, 1, 2, 1] // Output: 2

console.log(lonelyinteger(input))
console.log(lonelyinteger(input1))
console.log(lonelyinteger(input2))