export default class characters {
    keysdown = {};
    // constructeur pour un nouveau joueur
    constructor(sprite) {
        this.sprite = sprite;
        this.img = new Image();
        this.img.src = sprite.src;
        this.position = sprite.initialPosition;
        this.sequence = sprite.idleSequence;
        this.name = sprite.name;
        this.timer = sprite.timer;
        document.addEventListener("keydown", (event) => {
          this.keysdown[event.key] = true;
        });
        document.addEventListener("keyup", (event) => {
          delete this.keysdown[event.key];
        });
    
        setInterval(() => this.changeFrame(), 100);
      }
     // Séquence de mouvement du joueur 
    move() {
        this.sequence = this.sprite.idleSequence;
        if (this.keysdown[this.sprite.commands.left]) {
            this.toFlip = true;
            this.sequence = this.sprite.walkSequenceLeft;
            this.position.x -= this.sprite.speed;
        }
        if (this.keysdown[this.sprite.commands.right]) {
            this.toFlip = false;
            this.sequence = this.sprite.walkSequenceRight;
            this.position.x += this.sprite.speed;
        }
        if (this.keysdown[this.sprite.commands.up]) {
            this.sequence = this.sprite.walkSequenceUp;
            this.position.y -= this.sprite.speed;
        }
        if (this.keysdown[this.sprite.commands.down]) {
            this.sequence = this.sprite.walkSequenceDown;
            this.position.y += this.sprite.speed;
        }

    }

    changeFrame() {
        this.currentFrame = (this.currentFrame + 1) % this.sequence.length;
      }
    
      getSourceX() {
        const frame =
          this.currentFrame >= this.sequence.length ? 0 : this.currentFrame;
        return this.sequence[frame].x * this.sprite.tileWidth;
      }
    
      getSourceY() {
        const frame =
          this.currentFrame >= this.sequence.length ? 0 : this.currentFrame;
        return this.sequence[frame].y * this.sprite.tileHeight;
      }

      getTimer(){
        return this.timer;
      }
   
     
    
      render(ctx) {
        
        ctx.drawImage(
          this.img,
          this.getSourceX(),
          this.getSourceY(),
          this.sprite.tileWidth,
          this.sprite.tileHeight,
          this.position.x,
          this.position.y,
          this.sprite.tileWidth,
          this.sprite.tileHeight
        );

      }
}




