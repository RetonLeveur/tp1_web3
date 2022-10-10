import { getnNameOne, getnNameTwo } from "./menu.js";

export function scoreboard(){
    const board = $('<div></div>').attr('id','scoreBoard').addClass('text-center');
    const nameOne = getnNameOne();
    const nameTwo = getnNameTwo();
    const playerOne= $('<p></p>').text('Joueur 1: '+nameOne);
    const playerTwo= $('<p></p>').text('Joueur 2: '+nameTwo);
    board.append(playerOne).append(playerTwo);

    return board;
};
