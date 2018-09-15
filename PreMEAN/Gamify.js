var eeyore = { 
    character: "Eeyore",
    greet: function(){
        console.log("Nobody understands me, especially you!")
    } 
};
var heffalumps = { 
    character: "Heffalumps",
    greet: function(){
        console.log("Call the surgean, heffa, I found a lump!")
    } 
};
var kanga = { 
    character: "Kanga",
    greet: function(){
        console.log("Slap anotha shrimp on the bar-b!")
    } 
};
var owl = { 
    character: "Owl",
    greet: function(){
        console.log("Hoot hoot!")
    } 
};
var chris = { 
    character: "Christopher Robin",
    greet: function(){
        console.log("I'm a schizophrenic little boy with a cult following!")
    } 
};
var rabbit = { 
    character: "Rabbit",
    greet: function(){
        console.log("I <3 carrots!")
    } 
};
var gopher = { 
    character: "Gopher",
    greet: function(){
        console.log("Hey ma, i'm prarie doggin'!")
    } 
};
var piglett = { 
    character: "Piglett",
    greet: function(){
        console.log("Oh d-d-d-d-d-dear, I wasn't expecting company!")
    } 
};
var winnie = { 
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Oh bother!")
    } 
};
var bees = { 
    character: "Bees",
    greet: function(){
        console.log("Buzz buzz buzzzzzzzzz!")
    }
};
var tigger = { 
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about tiggers is that tiggers are wonderful things!")
    }
};

tigger.north = winnie;

winnie.south = tigger;
winnie.east = bees;
winnie.west = piglett;
winnie.north = chris;

piglett.east = winnie;
piglett.north = owl;

bees.west = winnie;
bees.north = rabbit;

owl.south = piglett;
owl.east = chris;

chris.west = owl;
chris.south = winnie;
chris.east = rabbit;
chris.north = kanga;

rabbit.west = chris;
rabbit.south = bees;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.south = chris;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffalumps;

heffalumps.west = eeyore;

var player = {
    location: tigger,
    honey: 0,
    needsHoney: winnie
}

function move(direction){
    if(player.location[direction] != null){
        player.location = player.location[direction];
        console.log("You are now at "+player.location.character+"'s house!");
        player.location.greet();
    }
    else{
        console.log("You can't go "+direction+" from here!")
    }
}

function pickUp(){
    if(player.location == bees){
        player.honey++
        console.log("You have "+player.honey+" honey.")
    }
    else{
        console.log("You can only pickup honey at the beehive")
    }
}

function objective(){
    console.log(player.needsHoney.character+" needs honey now!")
}

function drop(){
    if(player.location == player.needsHoney && player.honey > 0){
        player.honey--
        console.log(player.needsHoney.character+" thanks you!  You now have "+player.honey+" honey.")
    }
    else if (player.honey == 0){
        console.log("You have no honey to give!");
    }
    else{
        console.log(player.location.character+" doesn't need honey, "+player.needsHoney.character+" does!")
    }
}

objective();
move("to compton")
console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");
move("north")
console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");
move("east")
console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*")
pickUp();
console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*")
move("west")
console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*");
drop()
// move("north")
// console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*")
// drop()
// move("west")
// console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*")
// move("north")

