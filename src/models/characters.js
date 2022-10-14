export default class characters {
    hit ={right:false,left:false,top:false,bottom:false}
    currentFrame = 0;
    keysdown = {};
    constructor(sprite) {
        this.sprite = sprite;
        this.img = new Image();
        this.img.src = sprite.src;
        this.position = this.sprite.initialPosition;
        this.sequence = this.sprite.idleSequence;
        this.name = sprite.name;
        this.timer = 60;
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
        if (this.keysdown[this.sprite.commands.left] && this.hit.left == false) {
            this.toFlip = true;
            this.sequence = this.sprite.walkSequenceLeft;
            this.position.x -= this.sprite.speed;
        }
        if (this.keysdown[this.sprite.commands.right] && this.hit.right == false) {
            this.toFlip = false;
            this.sequence = this.sprite.walkSequenceRight;
            this.position.x += this.sprite.speed;
        }
        if (this.keysdown[this.sprite.commands.up] && this.hit.top == false) {
            this.sequence = this.sprite.walkSequenceUp;
            this.position.y -= this.sprite.speed;
        }
        if (this.keysdown[this.sprite.commands.down] && this.hit.bottom == false) {
            this.sequence = this.sprite.walkSequenceDown;
            this.position.y += this.sprite.speed;
        }

    }

    changeFrame() {
        this.currentFrame = (this.currentFrame + 1) % this.sequence.length;
      }
    
      getSourceX() {
        const frame = this.currentFrame >= this.sequence.length ? 0 : this.currentFrame;
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
   
     
      collisionEnter(otherCaracter){
        let s = this.hitBoxCalc(this);
        let v = this.hitBoxCalc(otherCaracter);

          if(s[1] <= v[0] && s[3] <= v[3] && s[3] >=v[2] && s[1] -v[0]  >= -5  
            || s[1] <= v[0] && s[2] >= v[2] && s[2] <= v[3] && s[1] -v[0]  >= -5 ){
            this.hit.right = true
            this.hit.left = false;  
            console.log("right");
          }
          else if(s[0] <= v[1] && s[3] <= v[3] && s[3] >=v[2] && v[1] - s[0] <= 10 ||s[0] <= v[1] && s[2] >= v[2] && s[2] <= v[3] && v[1] - s[0] <= 10 ){
            this.hit.left = true;   
            console.log("left");
          }  
          else if(s[3] <= v[2] && s[0] <= v[0] && s[1] >= v[0] && v[2] - s[3] <= 10 || s[3] <= v[2] && s[0] <= v[1] && s[1] >= v[1] && v[2] - s[3] <= 10 )
          {
            this.hit.bottom = true;
            console.log("top");
          }
          else if(s[2] >= v[3] && s[0] <= v[1] && s[1] >= v[0] && s[2] - v[3]   <= 5|| s[2] >= v[3] && s[0] >= v[1] && s[0] <= v[1] && s[2] - v[3]  <= 5){
            this.hit.top = true;
            console.log("in bot");
          }
          else {
            this.hit.right = false;
            this.hit.left = false;
            this.hit.top = false;
            this.hit.bottom = false;
            console.log("?");
          }


      }

      hitBoxCalc(character){
         return [character.position.x,character.position.x -20 + character.sprite.tileWidth,character.position.y,character.position.y + character.sprite.tileHeight -20];
      }
    
      render(ctx) {
        ctx.save();

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

        ctx.restore();
      }
}




