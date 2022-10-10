import { menu } from "./components/menu.js";
import { scoreboard } from "./components/scoreboard.js";
import { stage } from "./components/stage.js";
// ajout de la div principal au body 
const gameBoard= $('<div></div>').attr('id','gameboard').addClass('text-center');
gameBoard.append(menu());
$('body').append(gameBoard);
//action après d'avoir clicker sur jouer
$('#startGame').click(function (){
    gameBoard.append(scoreboard())
    gameBoard.append(stage());
    $('#menu').hide();

   
})
