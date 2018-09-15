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
    this.punch = function(opponent){
        if(opponent instanceof Ninja == false){
            console.log("You can only punch other ninjas, you can't punch "+opponent+"!")
            return
        }
        opponent.health-=5;
        console.log(self.name+" punched "+opponent.name+"! His health is now "+opponent.health+".")
    }
    this.kick = function(opponent){
        if(opponent instanceof Ninja == false){
            console.log("You can only kick other ninjas, you can't kick "+opponent+"!")
            return
        }
        opponent.health -= 15*strength;
        console.log(self.name+" kicked "+opponent.name+" in the balls! His health is now "+opponent.health+".")
    }

}

var hyabusa = new Ninja("Hyabusa");
var bill = new Ninja("Bill");
hyabusa.sayName();
hyabusa.showStats();
hyabusa.drinkSake();
hyabusa.punch(bill);
hyabusa.kick(bill);
hyabusa.punch("Judy");
hyabusa.kick("Judy");