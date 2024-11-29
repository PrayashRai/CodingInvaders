const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

let result = [0, 0, 1];
let winner = {};

let findWinner = (comp, res) => {
  for (let i in res) {
    if (res[i] === 1) {
      if (winner.hasOwnProperty(comp[i][0])) {
        winner[comp[i][0]] += 3;
      } else {
        winner[comp[i][0]] = 3;
      }
    } else if (res[i] === 0) {
      if (winner.hasOwnProperty(comp[i][1])) {
        winner[comp[i][1]] += 3;
      } else {
        winner[comp[i][1]] = 3;
      }
    }
  }
  let values = Object.values(winner);
  let max = Math.max(...values);
  for (let items in winner) {
    if (winner[items] === max) {
      console.log(items);
    }
  }
};

findWinner(competitions, result);
