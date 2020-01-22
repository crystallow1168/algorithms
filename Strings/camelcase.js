// https://www.hackerrank.com/challenges/camelcase/problem

const camelcase = (s) => {
  let wordCount = 1;

  for (let i = 0; i < s.length; i ++) {
    const char = s[i];

    if (char === char.toUpperCase()) {
      wordCount++ ;
    }
  }
  return wordCount;
}

// -----------------------------------------end of code

const input = 'saveChangesInTheEditor';

// Output = 5

console.log(camelcase(input))