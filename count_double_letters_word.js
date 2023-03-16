const S = "This letter for Aaron     is cool."; // Should return 3.
// => should return the number of double letter words.
// A double letter word is a word that contains 2 similar letters side by side.
// `A` == `a`.

let s = S.toLowerCase();
let count = 0;
count = s.split(" ").map((word) => {
  for (let j = 0; j < word.length - 1; j++) {
    if (word[j] === word[j + 1]) {
      return 1;
    }
  }
  return 0;
});

console.log(count.reduce((acc, curr) => acc + curr));
