import { menu } from "./components/menu.js";
import { scoreboard } from "./components/scoreboard.js";
import { stage } from "./components/stage.js";

const gameBoard= $('<div></div>').attr('id','gameboard').addClass('text-center');
gameBoard.append(menu());
$('body').append(gameBoard);
$('#startGame').click(function (){
    gameBoard.append(scoreboard())
    gameBoard.append(stage());
    $('#menu').remove();

   
})
