import { menu } from "./components/menu.js";
import { stage } from "./components/stage.js";
import { createLeaderBoard } from "./components/leaderBoard.js";
import { displayControls } from "./components/controlDisplay.js";
// ajout de la div principal au body 

const gameBoard= $('<div></div>').attr('id','gameboard').addClass('text-center');
gameBoard.append(menu());
gameBoard.append(createLeaderBoard());
$('body').append(gameBoard).hide().fadeIn(1500);


//action après d'avoir clicker sur jouer
$('#startGame').click(function (){
    gameBoard.append(displayControls())
    gameBoard.append(stage()).hide().fadeIn();
    $('#leaderBoard').hide();
    $('#menu').hide(); 
})
