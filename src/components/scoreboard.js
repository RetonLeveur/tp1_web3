import { getnNameOne, getnNameTwo } from "./menu.js";
// affiche le nom des joueur une fois la partie en marche
export function scoreboard(){
    const board = $('<div></div>').attr('id','scoreBoard').addClass('text-center');
    const playerOne= $('<p></p>').text(getnNameOne() +  ":" +"60 sec");
    const playerTwo= $('<p></p>').text(getnNameTwo() +  ":" +"60 sec");
    board.append(playerOne).append(playerTwo);

    return board;
};
