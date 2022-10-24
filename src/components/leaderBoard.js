let leaderBoard = JSON.parse(localStorage.getItem('entries'));

/**
 * creer le leaderBoard.
 * @return {leaderBoard}
 */
export function createLeaderBoard() {
  if (leaderBoard==null) {
    leaderBoard = [];
  }

  const board = $('<div></div>');
  board.addClass('leaderBoard');
  board.attr('id', 'leaderBoard');
  board.append($('<h2>Top 10 Players</h2>').addClass('leaderTitle'));
  let position = 1;
  leaderBoard.sort((a, b) => b.score - a.score);
  leaderBoard.forEach((entry) => {
    board.append(
        $('<p></p>')
            .addClass('leaderEntry')
            .text(position + ':' + entry.name + '    ' + entry.score),
    );
    position += 1;
  });

  return board;
}

/**
 * @param {string} name - le nom du joueur gagnant.
 * @param {number} score
 * @return {array}
 */
export function addToLeaderBoard(name, score) {
  if (leaderBoard==null) {
    leaderBoard = [];
  }
  if (leaderBoard.length == 9) {
    if (leaderBoard.filter((a) => a.score < score)) {
      leaderBoard.pop();
      leaderBoard.push({name, score});
      localStorage.setItem('entries', JSON.stringify(leaderBoard));
    }
  } else if (leaderBoard.length <9) {
    leaderBoard.push({name, score});
    localStorage.setItem('entries', JSON.stringify(leaderBoard));
  }

  return leaderBoard.sort((a, b) => b.score - a.score);
}


