// https://www.hackerrank.com/challenges/alternating-characters/problem

const alternatingCharacters = (s) => {
  let deletions = 0;

  for (let i = 1; i < s.length; i ++) {
    const char = s[i];
    const prev = s[i - 1];

    if (char === prev) {
      deletions++;
    }
  }
  return deletions;
}

// -----------------------------------------end of code

const input1 = 'AAAA'      // Output = 3
const input2 = 'BBBBB'     // Output = 4
const input3 = 'ABABABAB'  // Output = 0
const input4 = 'BABABA'    // Output = 0 
const input5 = 'AAABBB'    // Output = 4

console.log(alternatingCharacters(input1))
console.log(alternatingCharacters(input2))
console.log(alternatingCharacters(input3))
console.log(alternatingCharacters(input4))
console.log(alternatingCharacters(input5))