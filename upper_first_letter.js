const S = "hello    world I am HERE!";
// => should be: "Hello    World I Am Here!"

const x = [...S]
  .map((s, i) => {
    if (i === 0 || S[i - 1] === " ") {
      return s.toUpperCase();
    }
    return s.toLowerCase();
  })
  .join("");

console.log(x);
