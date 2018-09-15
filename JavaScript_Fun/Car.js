function carCreator(damage, color){
    this.damage = damage;
    this.color = color;
    this.fender = function(other){
        this.damage -= 10;
        other.damage -= 10;
        console.log("Your current damage is now "+self.damage+". The other guy's is "+other.damage+".")
    }
}