export default class timer{
    constructor(temps){
        this.duree = temps
    }

    start(){  
        this.timer = setInterval(() => this.reduireTemps(),1000);
    }

    stop(){
        clearInterval(this.timer);
    }
    reduireTemps(){
        this.duree--;
    }
}



   
