// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// For example, given the string , remove an  at positions  and  to make  in  deletions.

// Function Description

// Complete the alternatingCharacters function in the editor below. It must return an integer representing the minimum number of deletions to make the alternating string.

// alternatingCharacters has the following parameter(s):

// s: a string
// Input Format

// The first line contains an integer , the number of queries.
// The next  lines each contain a string .

// Constraints

// Each string  will consist only of characters  and 
// Output Format

// For each query, print the minimum number of deletions required on a new line.

const input1 = 'AAAA'      // 3
const input2 = 'BBBBB'      // 4
const input3 = 'ABABABAB'  // 0
const input4 = 'BABABA'     // 0 
const input5 = 'AAABBB'     // 4

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

console.log(alternatingCharacters(input1))
console.log(alternatingCharacters(input2))
console.log(alternatingCharacters(input3))
console.log(alternatingCharacters(input4))
console.log(alternatingCharacters(input5))