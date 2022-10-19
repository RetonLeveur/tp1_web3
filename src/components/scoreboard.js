import { addToLeaderBoard } from "./leaderBoard.js";
import { getnNameOne, getnNameTwo } from "./menu.js";
// affiche le nom des joueur une fois la partie en marche
export default class scoreBoard {
  constructor(joueur1, joueur2) {
    this.joueur1 = joueur1;
    this.joueur2 = joueur2;
  }

  afficher() {
    const board = $("<div></div>")
      .attr("id", "scoreBoard")
      .addClass("text-center", "scorBoard");
    const playerOne = $("<p></p>").text(
      this.joueur1.name + ": " + this.joueur1.timer.duree
    );
    const playerTwo = $("<p></p>").text(
      this.joueur2.name + ": " + this.joueur2.timer.duree
    );
    board.append(playerOne).append(playerTwo);

    return board;
  }
}
