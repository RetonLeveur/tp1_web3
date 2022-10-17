export default class timer{
    constructor(temps){
        this.duree = temps
    }

    start(){
        
        this.temps = setInterval(() => this.reduireTemps(),1000);
    }

    reduireTemps(){
        console.log("here");
        this.duree--;
    }
}



   
