class bike {
    constructor(
        public price: number,
        public topSpeed: number,
        public miles: number
    ) { }
   displayInfo = function(){
       console.log("Price: "+this.price);
       console.log("Top Speed: "+this.topSpeed);
       console.log("Miles: "+this.miles);
       return this;
    }
   ride = function(){
       console.log("Riding!");
       this.miles += 10
       console.log("Miles: "+this.miles);
       return this;
    }
   reverse = function(){
       console.log("Reversing!");
       this.miles -= 2
       console.log("Miles: "+this.miles);
       return this;
   }
}
const bicicleta = new bike(250, 15, 0);
bicicleta.displayInfo().ride().displayInfo().reverse()