class Card {
    constructor(suit, value, val){
        this.suit = suit;
        this.value = value;
        this.val = val;
    }
    show() {
        console.log(this.value+" of "+this.suit)
    }
}

class Deck{
    constructor(){
        this.cards = [];
    }
    build(){
        var arr1 = ["hearts","clubs","diamonds","spades"]
        var arr2 = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"]
        for(var i = 0; i < arr1.length; i++){
            for(var j = 0; j < arr2.length; j++){
                const card = new Card(arr1[i],arr2[j],j+1)
                this.cards.push(card);
            }
        }
        return this;
    }
    shuffle(){
        for(var a = 0; a < this.cards.length; a++){
            var rand = Math.floor((Math.random()*50)+1);
            var temp = this.cards[a];
            this.cards[a] = this.cards[rand];
            this.cards[rand] = temp
        }
        return this;
    }
    reset(){
        this.cards = [];
        this.build();
        return this;
    }
    deal(player){
        player.hand.push(this.cards[this.cards.length-1])
        this.cards.pop()
        return this;
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    draw(deck){
        deck.deal(this)
    }
    discard(num){
        if(num>this.hand.length){
            console.log("you don't have that many cards")
        }
        else{
            var temp = this.hand[num-1]
            this.hand[num-1] = this.hand[this.hand.length-1]
            this.hand[this.hand.length-1] = temp
            this.hand.pop()
        }
        return this;  
    }
}

const x = new Deck()
x.build().shuffle()
console.log(x)
console.log("!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!")
const Troy = new Player("Troy")
Troy.draw(x)
Troy.draw(x)
Troy.draw(x)
Troy.draw(x)
Troy.draw(x)
console.log(Troy);
console.log(x.cards.length);
console.log("!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!~!")
Troy.discard(5);
console.log(Troy);
