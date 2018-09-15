function Ninja(name){
    var self = this;
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function (){
        console.log("My ninja name is "+name+".")
    }
    this.showStats = function (){
        console.log("Health: "+self.health);
        console.log("Speed: "+speed);
        console.log("Strength: "+strength);
    }
    this.drinkSake = function (){
        self.health+=10;
        console.log(self.name+"'s health is now "+self.health+"!")
    }

}

var hyabusa = new Ninja("Hyabusa");
hyabusa.sayName();
hyabusa.showStats();
hyabusa.drinkSake();