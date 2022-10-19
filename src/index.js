import { menu } from "./components/menu.js";
import { stage } from "./components/stage.js";
import { createLeaderBoard } from "./components/leaderBoard.js";
// ajout de la div principal au body
export let gameOn = false;
const gameBoard = $("<div></div>")
  .attr("id", "gameBoard")
  .addClass("text-center");

function load() {
  gameBoard.append(menu());
 
  $("body").append(gameBoard).hide().fadeIn(1500);
}

export function newGame() {
  $("#menu").fadeIn();
  $("#stage").remove();
  $('#leaderBoard').show();

}

if (!gameOn) {
  load();
}

//action après d'avoir clicker sur jouer
$("#startGame").click(function () {
  gameOn = true;
  gameBoard.append(stage().attr("id", "stage")).hide().fadeIn();
 $('#leaderBoard').remove();
  $("#menu").hide();
});
$('#showLeader').click(function(){
  gameBoard.append(createLeaderBoard());
  setTimeout(() => {
    $('#leaderBoard').fadeOut(1500);
  
  }, 3000);
  setTimeout(() => {
    $('#leaderBoard').remove();
   }, 4500);
});
