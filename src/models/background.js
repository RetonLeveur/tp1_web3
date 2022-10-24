/**
 * classe qui construit le background
 */
export default class background {
  cols = 10;
  rows = 10;

  tiles = [[
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ],
  [
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 4, 1, 1, 1, 1, 1, 4, 1,
    1, 1, 3, 1, 1, 1, 1, 1, 3, 1,
    1, 1, 1, 4, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 3, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 4, 1, 1,
    1, 1, 4, 1, 1, 1, 1, 3, 1, 1,
    1, 1, 3, 1, 1, 1, 1, 1, 1, 1,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  ]];

  /**
   * constructeur pour le background
   * @param {*} tileAtlas
   * @param {number} tileSize - grandeur de tuile
   */
  constructor(tileAtlas, tileSize) {
    this.tileAtlas = tileAtlas;
    this.tileSize = tileSize;
    this.zoneBloquant = this.getHitBoxArbre();
  }

  /**
   * @param {number} layer - étage
   * @param {number} col - colonne
   * @param {number} row - ligne
   * @return {number} - numéro de tuile
   */
  getTile(layer, col, row) {
    return this.tiles[layer][row * this.cols + col];
  }
  /**
   * @return {array} - border [x,y,x+tilesSize,y+tilesSize]
   */
  getBorder() {
    return [0, this.tileSize*this.rows,
      this.tileSize-25, this.tileSize*(this.cols-1)];
  }
  /**
   * @return {array_of_array} - array d'array avec
   *  la position de tout les arbres
   */
  getHitBoxArbre() {
    const array = [];
    let tour = 0;
    this.tiles[1].forEach((tile) => {
      if (tile == 4) {
        array.push([tour % 10 * this.tileSize,
          tour % 10 *this.tileSize + this.tileSize,
          (tour- tour%10) /10 * this.tileSize,
          (tour- tour%10) /10 * this.tileSize + this.tileSize]);
      }
      tour++;
    });
    return array;
  }

  /**
   * dessine l'étage du background demandé
   * @param {context} ctx
   * @param {number} layer
   */
  render(ctx, layer) {
    for (let c = 0; c < this.cols; c++) {
      for (let r = 0; r < this.rows; r++) {
        const tile = this.getTile(layer, c, r);
        ctx.drawImage(
            this.tileAtlas, // image
            (tile - 1) * this.tileSize, // source x
            0, // source y
            this.tileSize, // source with
            this.tileSize, // source height
            c * this.tileSize, // target x
            r * this.tileSize, // target y
            this.tileSize, // target width
            this.tileSize, // target height
        );
      }
    }
  }
}
