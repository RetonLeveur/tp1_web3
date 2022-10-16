import { menu } from "./components/menu.js";
import { scoreboard } from "./components/scoreboard.js";
import { stage } from "./components/stage.js";
import { createLeaderBoard } from "./components/leaderBoard.js";
// ajout de la div principal au body 
const gameBoard= $('<div></div>').attr('id','gameboard').addClass('text-center');
gameBoard.append(menu());
gameBoard.append(createLeaderBoard());
$('body').append(gameBoard).hide().fadeIn(1500);


//action après d'avoir clicker sur jouer
$('#startGame').click(function (){
    gameBoard.append(scoreboard()).hide().fadeIn();
    gameBoard.append(stage()).hide().fadeIn();
    $('#menu').fadeOut(); 
})
