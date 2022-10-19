import background  from "../models/background.js";
import {PLAYER_TWO,PLAYER_ONE} from "../datas/sprite.js";
import { getnNameOne, getnNameTwo } from "./menu.js";
import Character from "../models/characters.js"
import scoreBoard from "./scoreboard.js";
import { newGame } from "../index.js";
import { addToLeaderBoard } from "./leaderBoard.js";
const asset = {};
const scene = {};
const tileSize = 64;
const wrapper = $('<div></div>');
export let gameOver = false
export function stage(){
    /** scoreboard ici */

    
    /**quand je le mets en jquery le canvas prend pas la bonne dimension */
   
    const canvas = $('<canvas></canvas>');
    canvas.id = 'canvas';

    const canvas2 = $('<canvas></canvas>');
    canvas2.id = 'canvas';

    loadImage('tileAtlas', '../assets/tiles.png');
    scene.tileMap = new background(asset.tileAtlas, tileSize);

    scene.context = canvas[0].getContext('2d');
    scene.context2 = canvas2[0].getContext('2d');

    setCanvasSize(scene.context);
    setCanvasSize(scene.context2);


    setStageSize();
    setGameLayer();

    wrapper.append(canvas);
    wrapper.append(canvas2);
    return wrapper;
}

function loadImage(key, src){
    asset[key] = new Image();
    asset[key].addEventListener('load', render);
    asset[key].src = src
}

function render(){
    scene.tileMap.render(scene.context, 0);
    scene.tileMap.render(scene.context, 1);
}
function setCanvasSize(ctx){
    ctx.canvas.height = scene.tileMap.rows * tileSize;
    ctx.canvas.width = scene.tileMap.cols * tileSize; 
}

function setStageSize(){
    stage.height = scene.tileMap.rows * tileSize;
    stage.width = scene.tileMap.cols * tileSize; 
}

function setGameLayer(){
    createCharacterWithTagRandom()
    loop(scene.context2);
}



function loop(ctx){

    gererScoreBoard();
 
    ctx.save();
    ctx.clearRect(0,0,stage.width,stage.height);

    /**L'ordre est important colisionEnterCharacter doit être avant les autres collisions */
    stage.character1.move();
    stage.character1.render(ctx);
    stage.character1.collisionEnterCharacter(stage.character2);
    stage.character1.collisionEnterBorder(scene.tileMap.getBorder());
    stage.character1.collisionEnterObjetsBloquant(scene.tileMap.zoneBloquant);
    
    
    stage.character2.move();
    stage.character2.render(ctx);
    stage.character2.collisionEnterCharacter(stage.character1);
    stage.character2.collisionEnterBorder(scene.tileMap.getBorder());
    stage.character2.collisionEnterObjetsBloquant(scene.tileMap.zoneBloquant);


    ctx.restore();
    setScore()
    setTimeout(() => {window.requestAnimationFrame(() => loop(ctx));},33);
}


function gererScoreBoard(){
    $(".scoreBoard").remove();
    wrapper.append(new scoreBoard(stage.character1,stage.character2).afficher().addClass('scoreBoard'))
}

function createCharacterWithTagRandom(){
    let random = Math.random(); 
    if(random > 0.5){
        stage.character1= new Character(PLAYER_ONE,getnNameOne(),true);
        stage.character2= new Character(PLAYER_TWO,getnNameTwo(),false);
    }
    else{
        stage.character1= new Character(PLAYER_ONE,getnNameOne(),false);
        stage.character2= new Character(PLAYER_TWO,getnNameTwo(),true);
    }
}



 function setScore(){
    if(stage.character1.timer.duree <= 0){
        stage.character1.timer.stop();
          stage.character2.score = stage.character2.timer.duree;
          addToLeaderBoard(stage.character2.name,stage.character2.score)
          gameOver= true;
          newGame();
        }
        else if(stage.character2.timer.duree <= 0){
            stage.character1.timer.stop();
              stage.character1.score = stage.character1.timer.duree;
              addToLeaderBoard(stage.character1.name,stage.character1.score)
              gameOver= true;
              newGame();
        }
      
  }
        
    



