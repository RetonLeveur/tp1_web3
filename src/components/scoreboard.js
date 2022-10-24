/**
 * Classe pour le score board
 */
export default class scoreBoard {
  /**
   *  constructeur
   * @param {Character} joueur1
   * @param {Character} joueur2
   */
  constructor(joueur1, joueur2) {
    this.joueur1 = joueur1;
    this.joueur2 = joueur2;
  }

  /**
   * afficher le score board
   * @return {div} - le scoreBoard
   */
  afficher() {
    const board = $('<div></div>')
        .attr('id', 'scoreBoard')
        .addClass('text-center', 'scorBoard');
    const playerOne = $('<p></p>').text(
        'Player One : Arrows: '+
        this.joueur1.name + ': ' + this.joueur1.timer.duree,
    );
    const playerTwo = $('<p></p>').text(
        ' Player Two : W, S, A, D: '+this.joueur2.name +
         ': ' + this.joueur2.timer.duree,
    );
    board.append(playerOne).append(playerTwo);

    return board;
  }
}
