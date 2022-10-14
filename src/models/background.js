export default class background{
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
        1, 1, 4, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 3, 1, 1, 1, 1, 1, 4, 1,
        1, 1, 1, 1, 4, 1, 1, 1, 3, 1,
        1, 1, 1, 1, 3, 1, 4, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 3, 1, 4, 1,
        1, 4, 1, 1, 1, 1, 1, 1, 3, 1,
        1, 3, 1, 1, 1, 1, 1, 1, 1, 1,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  

       
      ]];

      constructor(tileAtlas, tileSize){
        this.tileAtlas = tileAtlas;
        this.tileSize = tileSize;
      }

      getTile(layer, col, row){
        return this.tiles[layer][row * this.cols + col];
      }
      getBorder(){
        return [0,this.tileSize*this.rows,this.tileSize-25,this.tileSize*(this.cols-1)]
      }

      render(ctx, layer){
        for(let c = 0; c < this.cols; c++){
            for(let r = 0; r < this.rows; r++){
                const tile = this.getTile(layer, c, r);
                ctx.drawImage(
                    this.tileAtlas, //image
                    (tile - 1) * this.tileSize, // source x 
                    0, // source y
                    this.tileSize, // source with
                    this.tileSize, // source height
                    c * this.tileSize, // target x
                    r * this.tileSize, // target y
                    this.tileSize, // target width
                    this.tileSize //target height
                );
            }   
        }
      }

}