export default class Background{
    img = new Image();

    setBackgroundImg(src,callback){
        this.img.addEventListener('load',callback);
        this.img.src = src;
    }
    render(ctx){
        ctx.drawImage(this.img,0,0);
    }
}