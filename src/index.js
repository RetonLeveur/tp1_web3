import {createMenu} from './components/menu.js';
import {stage, resetScoreAdded} from './components/stage.js';
import {createLeaderBoard} from './components/leaderBoard.js';
// ajout de la div principal au body

const gameBoard = $('<div></div>')
    .attr('id', 'gameBoard')
    .addClass('text-center');

gameBoard.append(createMenu);
$('body').append(gameBoard).hide().fadeIn(1500);

/**
 * action pour démarer un nouvelle partie
 */
export function newGame() {
  window.location.reload();
}


// action après d'avoir clicker sur jouer
$('#startGame').click(function() {
  gameBoard.append(stage().attr('id', 'stage')).hide().fadeIn();
  $('#leaderBoard').remove();
  $('#menu').hide();
  resetScoreAdded();
});
$('#showLeader').click(function() {
  $('#stage').remove();
  gameBoard.append(createLeaderBoard());
  setTimeout(() => {
    $('#leaderBoard').fadeOut(1500);
  }, 2000);
  setTimeout(() => {
    $('#leaderBoard').remove();
  }, 4500);
});
