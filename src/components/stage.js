import background  from "../models/background.js";

const asset = {};
const scene = {};

export function stage(){
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';

    const tileSize = 64;
    loadImage('tileAtlas', '../assets/tiles.png');
    scene.tileMap = new background(asset.tileAtlas, tileSize);
    
    canvas.height = scene.tileMap.rows * tileSize;
    canvas.width = scene.tileMap.cols * tileSize;
    scene.context = canvas.getContext('2d');

    return canvas;
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