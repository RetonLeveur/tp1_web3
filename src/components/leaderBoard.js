let leaderBoard = [
 
];

export function createLeaderBoard() {
 
  const board = $("<div></div>")
  board.addClass("leaderBoard")
  board.attr("id", "leaderBoard");
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
  if (leaderBoard.length == 10) {
    if (leaderBoard.filter((a) => a.score < score)) {
      leaderBoard.pop();
      leaderBoard.push(name);
    }
  }
  else if(leaderBoard.length <10){
    leaderBoard.push(name);
  }
  
  return leaderBoard.sort((a, b) => b.score - a.score);
}



