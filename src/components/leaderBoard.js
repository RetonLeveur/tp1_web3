let leaderBoard = [
  { name: "john", score: 55 },
  { name: "john", score: 35 },
  { name: "john", score: 26 },
  { name: "john", score: 56 },
  { name: "john", score: 60 },
  { name: "john", score: 44 },
  { name: "john", score: 37 },
  { name: "john", score: 22 },
  { name: "john", score: 57 },
  { name: "john", score: 52 },
];

export function createLeaderBoard() {
  const board = $("<div></div>")
    .addClass("leaderBoard")
    .attr("id", "leaderBoard");
  board.append($("<h2>Top 10 Players</h2>").addClass("leaderTitle"));
  let position = 1;
  leaderBoard.sort((a, b) => b.score - a.score);
  leaderBoard.forEach((entry) => {
    board.append(
      $("<p></p>")
        .addClass("leaderEntry")
        .text(position + ":" + entry.name + "    " + entry.score)
    );
    position += 1;
  });

  return board;
}

export function addToLeaderBoard(name, score) {
  if (leaderBoard.length <= 10) {
    if (leaderBoard.filter((a) => a.score < score)) {
      leaderBoard.pop();
      leaderBoard.push(name, score);
    }
  }
  return leaderBoard.sort((a, b) => b.score - a.score);
}
