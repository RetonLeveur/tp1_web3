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
  gameBoard.append(createLeaderBoard());
  $("body").append(gameBoard).hide().fadeIn(1500);
}

export function newGame() {
    $('#menu').fadeIn();
    $('#stage').remove();
}

if(!gameOn){
    load();
}


//action après d'avoir clicker sur jouer
$("#startGame").click(function () {
  gameOn = true;
  gameBoard.append(stage().attr('id','stage')).hide().fadeIn();
  //$('#leaderBoard').hide();
  $("#leaderBoard").remove();
  //gameBoard.append(createLeaderBoard());
  $("#menu").hide();
});
