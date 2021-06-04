class HoneyMakerBee extends Bee { 
    honeyPot: number = 0
    constructor(){
        super();
        this.age = 10;
        this.job = `make honey`;
        }
        makeHoney() {
            this.honeyPot += 1;
        }
        giveHoney() {
            this.honeyPot -= 1;
        }
};



