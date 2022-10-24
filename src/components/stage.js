import Background from '../models/background.js';
import {PLAYER_TWO, PLAYER_ONE} from '../datas/sprite.js';
import {getnNameOne, getnNameTwo} from './menu.js';
import Character from '../models/characters.js';
import ScoreBoard from './scoreboard.js';
import {newGame} from '../index.js';
import {addToLeaderBoard} from './leaderBoard.js';
export let scoreAdded = false;
const asset = {};
const scene = {};
const tileSize = 64;
const wrapper = $('<div></div>');
export const gameOver = false;
/**
 * Le tableau de jeu.
 * @return {div}
 */
export function stage() {
  /** scoreboard ici */

  /** quand je le mets en jquery le canvas prend pas la bonne dimension */

  const canvas = $('<canvas></canvas>');
  canvas.id = 'canvas';

  const canvas2 = $('<canvas></canvas>');
  canvas2.id = 'canvas';

  loadImage('tileAtlas', '../assets/tiles.png');
  scene.tileMap = new Background(asset.tileAtlas, tileSize);

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

/**
 * load l'image
 * @param {String} key
 * @param {img_src} src
 */
function loadImage(key, src) {
  asset[key] = new Image();
  asset[key].addEventListener('load', render);
  asset[key].src = src;
}

/**
 * affiche le background.
 */
function render() {
  scene.tileMap.render(scene.context, 0);
  scene.tileMap.render(scene.context, 1);
}
/**
 * donne les dimension au canvas
 * @param {context} ctx
 */
function setCanvasSize(ctx) {
  ctx.canvas.height = scene.tileMap.rows * tileSize;
  ctx.canvas.width = scene.tileMap.cols * tileSize;
}

/**
 * donne les dimension au stage
 */
function setStageSize() {
  stage.height = scene.tileMap.rows * tileSize;
  stage.width = scene.tileMap.cols * tileSize;
}

/**
 * creer les personnage et demarrer la loop
 */
function setGameLayer() {
  createCharacterWithTagRandom();
  loop(scene.context2);
}

/**
 * loop récurente gérant le jeu
 * @param {context} ctx
 */
function loop(ctx) {
  gererScoreBoard();
  setScore();
  ctx.save();
  ctx.clearRect(0, 0, stage.width, stage.height);

  /** L'ordre est important colisionEnterCharacter
   * doit être avant les autres collisions */
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

  setTimeout(() => {
    window.requestAnimationFrame(() => loop(ctx));
  }, 33);
}

/**
 * gère le score board
 */
function gererScoreBoard() {
  $('.scoreBoard').remove();
  wrapper.append(
      new ScoreBoard(stage.character1, stage.character2)
          .afficher()
          .addClass('scoreBoard'),
  );
}

/**
 * Crée les 2 personnage et donne la tag a un.
 */
function createCharacterWithTagRandom() {
  const random = Math.random();
  if (random > 0.5) {
    stage.character1 = new Character(PLAYER_ONE, getnNameOne(), true);
    stage.character2 = new Character(PLAYER_TWO, getnNameTwo(), false);
  } else {
    stage.character1 = new Character(PLAYER_ONE, getnNameOne(), false);
    stage.character2 = new Character(PLAYER_TWO, getnNameTwo(), true);
  }
}

/**
 * set le score ?
 */
function setScore() {
  if (stage.character1.timer.duree <= 0 && scoreAdded==false) {
    scoreAdded = true;
    stage.character1.timer.stop();
    stage.character2.score = stage.character2.timer.duree;
    addToLeaderBoard(stage.character2.name, stage.character2.score);
    newGame();
  } else if (stage.character2.timer.duree <= 0 && scoreAdded==false) {
    scoreAdded = true;
    stage.character1.timer.stop();
    stage.character1.score = stage.character1.timer.duree;
    addToLeaderBoard(stage.character1.name, stage.character1.score);
    newGame();
  }
}

export function resetScoreAdded() {
  return scoreAdded = false;
}
