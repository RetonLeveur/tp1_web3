import { menu } from "./components/menu.js";
import { stage } from "./components/stage.js";
import { createLeaderBoard } from "./components/leaderBoard.js";
import { displayControls } from "./components/controlDisplay.js";
// ajout de la div principal au body 
let gameOn = false;

const gameBoard= $('<div></div>').attr('id','gameboard').addClass('text-center');
gameBoard.append(menu());
gameBoard.append(createLeaderBoard());
$('body').append(gameBoard).hide().fadeIn(1500);
    if(!gameOn){
       
        //action après d'avoir clicker sur jouer
        $('#startGame').click(function (){
            gameOn= true;
            gameBoard.append(displayControls())
            gameBoard.append(stage().addClass('stage')).hide().fadeIn();
            //$('#leaderBoard').hide();
            $('#leaderBoard').remove();
            //gameBoard.append(createLeaderBoard());
            $('#menu').hide(); 
        })
  
    }

    


