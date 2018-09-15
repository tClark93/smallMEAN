class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("This ninja's name is "+this.name+"!")
    }
    showStats() {
        console.log("This is "+this.name+"!");
        console.log(this.name+"'s current health: "+this.health);
        console.log(this.name+"'s current speed: "+this.speed);
        console.log(this.name+"'s current strength: "+this.strength);
    }
    drinkSake() {
        this.health += 10
        console.log(this.name+"'s health is now "+this.health+"!")
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("this is a wise message")
    }

}

// const ninja = new Ninja("Bart")
// ninja.drinkSake();
// ninja.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
