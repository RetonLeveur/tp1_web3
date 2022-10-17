import  timer from './timer.js';

export default class characters {
    hit ={right:false,left:false,top:false,bottom:false}
    currentFrame = 0;
    keysdown = {};
    constructor(sprite,name) {
        this.sprite = sprite;
        this.img = new Image();
        this.speed = 5; 
        this.isTag =false;
        this.name = name;
        this.img.src = sprite.src;
        this.position = this.sprite.initialPosition;
        this.sequence = this.sprite.idleSequence;
        this.timer = new timer(60);
        this.hitboxMaincharacter = [];
        document.addEventListener("keydown", (event) => {
          this.keysdown[event.key] = true;
        });
        document.addEventListener("keyup", (event) => {
          delete this.keysdown[event.key];
        });
        
        this.timer.start();
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

      collisionEnterObjetsBloquant(listObj){
        
       
        listObj.forEach(element => {     
          

          if(this.hitboxMaincharacter[1] <= element[0] && this.hitboxMaincharacter[3] <= element[3] &&
            this.hitboxMaincharacter[3] >=element[2] && element[0]-this.hitboxMaincharacter[1] <= 2 || 
            this.hitboxMaincharacter[1] <= element[0] && this.hitboxMaincharacter[2] >= element[2] &&
            this.hitboxMaincharacter[2] <= element[3] && element[0]-this.hitboxMaincharacter[1] <= 2){
            this.hit.right = true;

          }
          else if(this.hitboxMaincharacter[0] <= element[1] && this.hitboxMaincharacter[3] <= element[3] &&
            this.hitboxMaincharacter[3] >=element[2] && element[1] - this.hitboxMaincharacter[0] <= 2 ||
            this.hitboxMaincharacter[0] <= element[1] && this.hitboxMaincharacter[2] >= element[2] &&
            this.hitboxMaincharacter[2] <= element[3] && element[1] - this.hitboxMaincharacter[0] <= 2 ){
            this.hit.left = true;   
          }
          else if(this.hitboxMaincharacter[3] <= element[2] && this.hitboxMaincharacter[0] <= element[1] &&
            this.hitboxMaincharacter[1] >= element[0] && this.hitboxMaincharacter[3] - element[2]   >= -3||
            this.hitboxMaincharacter[2] >= element[3] && this.hitboxMaincharacter[0] >= element[1] &&
             this.hitboxMaincharacter[0] <= element[1] && this.hitboxMaincharacter[3] - element[2]  >= -3)
          {
            this.hit.bottom = true;
          }
          else if(this.hitboxMaincharacter[2] >= element[3] && this.hitboxMaincharacter[0] <= element[1] &&
            this.hitboxMaincharacter[1] >= element[0] && this.hitboxMaincharacter[2] - element[3]   <= 10||
            this.hitboxMaincharacter[2] >= element[3] && this.hitboxMaincharacter[0] >= element[1] &&
             this.hitboxMaincharacter[0] <= element[1] && this.hitboxMaincharacter[2] - element[3]  <= 10){
            this.hit.top = true;
          }
          

        });
        
      }
      collisionEnterBorder(border){
        if(this.hitboxMaincharacter[0] <= border[0]){
            this.hit.left = true;
          }
          else if(this.hitboxMaincharacter[1] >= border[1]){
            this.hit.right = true;
          }

          if(this.hitboxMaincharacter[2] <= border[2])
          {
            this.hit.top = true;
          }
          else if(this.hitboxMaincharacter[3] >= border[3])
          {
            this.hit.bottom = true;
          }
        
      }
      collisionEnterCharacter(otherCaracter){
        this.hitboxMaincharacter = this.hitBoxCalc(this);
        let hitboxOthercharacter = this.hitBoxCalc(otherCaracter);
       
          if(this.hitboxMaincharacter[1] - hitboxOthercharacter[0] <=8 && this.hitboxMaincharacter[3] <= hitboxOthercharacter[3] &&
            this.hitboxMaincharacter[3] >=hitboxOthercharacter[2] && this.hitboxMaincharacter[1] - hitboxOthercharacter[0]  >= -5  
            || this.hitboxMaincharacter[1] - hitboxOthercharacter[0] <=8 && this.hitboxMaincharacter[2] >= hitboxOthercharacter[2] &&
            this.hitboxMaincharacter[2] <= hitboxOthercharacter[3] && this.hitboxMaincharacter[1] -hitboxOthercharacter[0]  >= -5 ) {
            this.hit.right = true;
            this.becomeTag();
          }
          else if(this.hitboxMaincharacter[0] - hitboxOthercharacter[1] <= 5 && this.hitboxMaincharacter[3] <= hitboxOthercharacter[3] &&
            this.hitboxMaincharacter[3] >=hitboxOthercharacter[2] && hitboxOthercharacter[1] - this.hitboxMaincharacter[0] <= 30 ||
            this.hitboxMaincharacter[0] - hitboxOthercharacter[1] <= 5 && this.hitboxMaincharacter[2] >= hitboxOthercharacter[2] &&
            this.hitboxMaincharacter[2] <= hitboxOthercharacter[3] && hitboxOthercharacter[1] - this.hitboxMaincharacter[0] <= 30 ) {
            this.hit.left = true;    
            this.becomeTag();
          }  
          else if(hitboxOthercharacter[2] - this.hitboxMaincharacter[3]   <= 9 && this.hitboxMaincharacter[0] <= hitboxOthercharacter[1] &&
            this.hitboxMaincharacter[1] >= hitboxOthercharacter[0] && hitboxOthercharacter[2] >= this.hitboxMaincharacter[2]  ||
            hitboxOthercharacter[2] - this.hitboxMaincharacter[3]   <= 9 && this.hitboxMaincharacter[0] <= hitboxOthercharacter[1] &&
            this.hitboxMaincharacter[1] >= hitboxOthercharacter[1] && hitboxOthercharacter[2] >= this.hitboxMaincharacter[2] ) {
            this.hit.bottom = true;
            this.becomeTag();
          }
          else if(this.hitboxMaincharacter[2] - hitboxOthercharacter[3] <=4 && this.hitboxMaincharacter[0] <= hitboxOthercharacter[1] &&
            this.hitboxMaincharacter[1] >= hitboxOthercharacter[0] && this.hitboxMaincharacter[3] >= hitboxOthercharacter[3]||
            this.hitboxMaincharacter[2] - hitboxOthercharacter[3] <=4 && this.hitboxMaincharacter[0] >= hitboxOthercharacter[1] &&
             this.hitboxMaincharacter[0] <= hitboxOthercharacter[1] && this.hitboxMaincharacter[3] >= hitboxOthercharacter[3]){
            this.hit.top = true;
            this.becomeTag();
          }
          else {
            this.hit.right = false;
            this.hit.left = false;
            this.hit.top = false;
            this.hit.bottom = false;
          }
      }


      activerTagMode(){
        this.hit.right = false;
        this.hit.left = false;
        this.hit.top = false;
        this.hit.bottom = false;
      }
      becomeTag(){
        if(1 === 1){
          /**this.tag */
          /**setInterval(this.activerTagMode,2000);
          this.hit.right = true;
          this.hit.left = true;
          this.hit.top = true;
          this.hit.bottom = true;**/
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

 





