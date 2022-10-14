import background  from "../models/background.js";
import {PLAYER_TWO,PLAYER_ONE} from "../datas/sprite.js";
import Character from "../models/characters.js"
const asset = {};
const scene = {};
const tileSize = 64;
export function stage(){

    /**quand je le mets en jquery le canvas prend pas la bonne dimension */
    const wrapper = $('<div></div>');
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
    stage.character1= new Character(PLAYER_ONE);
    stage.character2= new Character(PLAYER_TWO);
    loop(scene.context2);
}



function loop(ctx){
    ctx.save();
    ctx.clearRect(0,0,stage.width,stage.height);

    stage.character1.move();
    stage.character1.render(ctx);
    stage.character1.collisionEnterCharacter(stage.character2);
    stage.character1.collisionEnterBorder(scene.tileMap.getBorder());


    
    stage.character2.move();
    stage.character2.render(ctx);
    stage.character2.collisionEnterCharacter(stage.character1);
    stage.character2.collisionEnterBorder(scene.tileMap.getBorder());

    ctx.restore();
    setTimeout(() => {window.requestAnimationFrame(() => loop(ctx));},33);
}

