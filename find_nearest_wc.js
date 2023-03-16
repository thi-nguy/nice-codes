const maxtime = 60; // maxtime can hold before peepee goes out :))
const speed = 2;
const ntoilet = 5;

let min_time = 1000;
let wcId = -1;
const test_inputs = ["0 40 10", "1 60 10", "2 20 10", "3 10 10", "4 30 10"];

for (let i = 0; i < ntoilet; i++) {
  var inputs = test_inputs[i].split(" "); // wcId  distance   occupationTime
  console.log(inputs);
  const id = parseInt(inputs[0]);
  const distance = parseInt(inputs[1]);
  const occupationtime = parseInt(inputs[2]);

  if (
    distance / speed < min_time &&
    distance / speed + occupationtime <= maxtime
  ) {
    min_time = distance / speed;
    wcId = id;
  }
}

wcId >= 0 ? console.log(wcId) : console.log("Ohh sh*t!"); // find the earliest wcId that we can use.
