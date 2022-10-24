import Timer from './timer.js';

/**
 * character de jeux
 */
export default class characters {
  hit ={right: false, left: false, top: false, bottom: false};
  currentFrame = 0;
  keysdown = {};

  /**
   * constructeur du personnage
   * @param {*} sprite
   * @param {*} name - nom.
   * @param {*} isTag - est la tag.
   * @param {*} score - son score
   */
  constructor(sprite, name, isTag, score) {
    this.sprite = sprite;
    this.img = new Image();
    this.speed = 5;
    this.isTag =isTag;
    this.name = name;
    this.img.src = sprite.src;
    this.position = this.sprite.initialPosition;
    this.sequence = this.sprite.idleSequence;
    this.timer = new Timer(60);
    this.hitboxMaincharacter = [];
    this.isImmobiliser = false;
    this.score = score;
    document.addEventListener('keydown', (event) => {
      this.keysdown[event.key] = true;
    });
    document.addEventListener('keyup', (event) => {
      delete this.keysdown[event.key];
    });

    if (this.isTag) {
      this.timer.start();
    }
    setInterval(() => this.changeFrame(), 100);
  }
  /**
   * methode pour g<erer mouvement
   */
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

  /**
   * change le frame selon l'action
   */
  changeFrame() {
    this.currentFrame = (this.currentFrame + 1) % this.sequence.length;
  }

  /**
   * retourne le sprite
   * @return {sprite}
   */
  getSourceX() {
    const frame = this.currentFrame >=
     this.sequence.length ? 0 : this.currentFrame;
    return this.sequence[frame].x * this.sprite.tileWidth;
  }

  /**
   * retourne le sprite
   * @return {sprite}
   */
  getSourceY() {
    const frame =
          this.currentFrame >= this.sequence.length ? 0 : this.currentFrame;
    return this.sequence[frame].y * this.sprite.tileHeight;
  }


  /**
   * gère les collisions avec les objets
   * @param {array} listObj
   */
  collisionEnterObjetsBloquant(listObj) {
    listObj.forEach((element) => {
      if (this.hitboxMaincharacter[1] <= element[0] &&
         this.hitboxMaincharacter[3] <= element[3] &&
            this.hitboxMaincharacter[3] >=element[2] &&
             element[0]-this.hitboxMaincharacter[1] <= 2 ||
            this.hitboxMaincharacter[1] <= element[0] &&
             this.hitboxMaincharacter[2] >= element[2] &&
            this.hitboxMaincharacter[2] <= element[3] &&
             element[0]-this.hitboxMaincharacter[1] <= 2) {
        this.hit.right = true;
      } else if (this.hitboxMaincharacter[0] <= element[1] &&
         this.hitboxMaincharacter[3] <= element[3] &&
            this.hitboxMaincharacter[3] >=element[2] &&
             element[1] - this.hitboxMaincharacter[0] <= 2 ||
            this.hitboxMaincharacter[0] <= element[1] &&
             this.hitboxMaincharacter[2] >= element[2] &&
            this.hitboxMaincharacter[2] <= element[3] &&
             element[1] - this.hitboxMaincharacter[0] <= 2 ) {
        this.hit.left = true;
      } else if (this.hitboxMaincharacter[3] <= element[2] &&
         this.hitboxMaincharacter[0] <= element[1] &&
            this.hitboxMaincharacter[1] >= element[0] &&
             this.hitboxMaincharacter[3] - element[2] >= -3||
            this.hitboxMaincharacter[2] >= element[3] &&
             this.hitboxMaincharacter[0] >= element[1] &&
             this.hitboxMaincharacter[0] <= element[1] &&
              this.hitboxMaincharacter[3] - element[2] >= -3) {
        this.hit.bottom = true;
      } else if (this.hitboxMaincharacter[2] >= element[3] &&
         this.hitboxMaincharacter[0] <= element[1] &&
            this.hitboxMaincharacter[1] >= element[0] &&
             this.hitboxMaincharacter[2] - element[3] <= 10||
            this.hitboxMaincharacter[2] >= element[3] &&
             this.hitboxMaincharacter[0] >= element[1] &&
             this.hitboxMaincharacter[0] <= element[1] &&
              this.hitboxMaincharacter[2] - element[3] <= 10) {
        this.hit.top = true;
      }
    });
  }
  /**
   * gère la collision avec les border
   * @param {array} border - les border de la map
   */
  collisionEnterBorder(border) {
    if (this.hitboxMaincharacter[0] <= border[0]) {
      this.hit.left = true;
    } else if (this.hitboxMaincharacter[1] >= border[1]) {
      this.hit.right = true;
    }

    if (this.hitboxMaincharacter[2] <= border[2]) {
      this.hit.top = true;
    } else if (this.hitboxMaincharacter[3] >= border[3]) {
      this.hit.bottom = true;
    }
  }

  /**
   * gère collision avec les autres Charactere
   * @param {Character} otherCaracter - l'autre caractère
   */
  collisionEnterCharacter(otherCaracter) {
    this.hitboxMaincharacter = this.hitBoxCalc(this);
    const hitboxOthercharacter = this.hitBoxCalc(otherCaracter);

    if (this.hitboxMaincharacter[1] - hitboxOthercharacter[0] <=8 &&
       this.hitboxMaincharacter[3] <= hitboxOthercharacter[3] &&
            this.hitboxMaincharacter[3] >=hitboxOthercharacter[2] &&
             this.hitboxMaincharacter[1] - hitboxOthercharacter[0] >= -5 ||
            this.hitboxMaincharacter[1] - hitboxOthercharacter[0] <=8 &&
             this.hitboxMaincharacter[2] >= hitboxOthercharacter[2] &&
            this.hitboxMaincharacter[2] <= hitboxOthercharacter[3] &&
             this.hitboxMaincharacter[1] -hitboxOthercharacter[0] >= -5 ) {
      this.hit.right = true;
      this.becomeTag(otherCaracter);
    } else if (this.hitboxMaincharacter[0] - hitboxOthercharacter[1] <= 5 &&
       this.hitboxMaincharacter[3] <= hitboxOthercharacter[3] &&
            this.hitboxMaincharacter[3] >=hitboxOthercharacter[2] &&
             hitboxOthercharacter[1] - this.hitboxMaincharacter[0] <= 30 ||
            this.hitboxMaincharacter[0] - hitboxOthercharacter[1] <= 5 &&
             this.hitboxMaincharacter[2] >= hitboxOthercharacter[2] &&
            this.hitboxMaincharacter[2] <= hitboxOthercharacter[3] &&
            hitboxOthercharacter[1] - this.hitboxMaincharacter[0] <= 30 ) {
      this.hit.left = true;
      this.becomeTag(otherCaracter);
    } else if (hitboxOthercharacter[2] - this.hitboxMaincharacter[3] <= 9 &&
       this.hitboxMaincharacter[0] <= hitboxOthercharacter[1] &&
            this.hitboxMaincharacter[1] >= hitboxOthercharacter[0] &&
             hitboxOthercharacter[2] >= this.hitboxMaincharacter[2] ||
            hitboxOthercharacter[2] - this.hitboxMaincharacter[3] <= 9 &&
             this.hitboxMaincharacter[0] <= hitboxOthercharacter[1] &&
            this.hitboxMaincharacter[1] >= hitboxOthercharacter[1] &&
             hitboxOthercharacter[2] >= this.hitboxMaincharacter[2] ) {
      this.hit.bottom = true;
      this.becomeTag(otherCaracter);
    } else if (this.hitboxMaincharacter[2] - hitboxOthercharacter[3] <=4 &&
       this.hitboxMaincharacter[0] <= hitboxOthercharacter[1] &&
            this.hitboxMaincharacter[1] >= hitboxOthercharacter[0] &&
             this.hitboxMaincharacter[3] >= hitboxOthercharacter[3]||
            this.hitboxMaincharacter[2] - hitboxOthercharacter[3] <=4 &&
            this.hitboxMaincharacter[0] >= hitboxOthercharacter[1] &&
             this.hitboxMaincharacter[0] <= hitboxOthercharacter[1] &&
             this.hitboxMaincharacter[3] >= hitboxOthercharacter[3]) {
      this.hit.top = true;
      this.becomeTag(otherCaracter);
    } else if (!this.isImmobiliser) {
      this.libererMouvement();
    }
  }

  /**
   * immobilise le personnage
   */
  immobiliser() {
    this.hit.right = true;
    this.hit.left = true;
    this.hit.top = true;
    this.hit.bottom = true;
  }

  /**
   * libère le personnage dans tous les directions
   */
  libererMouvement() {
    this.hit.right = false;
    this.hit.left = false;
    this.hit.top = false;
    this.hit.bottom = false;
  }

  /**
   * Activer le mode tag
   */
  activerTagMode() {
    this.libererMouvement();
    this.timer.start();
    this.isImmobiliser = false;
  }

  /**
   * devient la tag
   * @param {Character} otherCaracter
   */
  becomeTag(otherCaracter) {
    if (this.isImmobiliser && !this.isTag) {
      this.isTag = true;
      this.immobiliser();
      setTimeout(() => this.activerTagMode(), 2000);
    } else if (!otherCaracter.isImmobiliser &&
       this.isTag && !this.isImmobiliser) {
      otherCaracter.isImmobiliser = true;
      this.timer.stop();
      this.isTag = false;
    }
  }

  /**
   * @param {Character} character
   * @return {array} - le dimension alentoure du caracter hit box
   */
  hitBoxCalc(character) {
    return [character.position.x,
      character.position.x -20 + character.sprite.tileWidth,
      character.position.y,
      character.position.y + character.sprite.tileHeight -20];
  }

  /**
   * rendu de l'img.
   * @param {context} ctx
   */
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
        this.sprite.tileHeight,
    );

    ctx.restore();
  }
}


