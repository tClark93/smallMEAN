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
    location: tigger
}

function move(direction){
    if(direction == "north"){
        if(player.location.north != null){
            player.location = player.location.north;
            console.log("You are now at "+player.location.character+"'s house!");
            player.location.greet();
        }
        else{
            console.log("You can't go north from here!")
        }
    }
    else if(direction == "east"){
        if(player.location.east != null){
            player.location = player.location.east;
            console.log("You are now at "+player.location.character+"'s house!");
            player.location.greet();
        }
        else{
            console.log("You can't go east from here!")
        }
    }
    else if(direction == "south"){
        if(player.location.south != null){
            player.location = player.location.south;
            console.log("You are now at "+player.location.character+"'s house!");
            player.location.greet();
        }
        else{
            console.log("You can't go south from here!")
        }
    }
    else if(direction == "west"){
        if(player.location.west != null){
            player.location = player.location.west;
            console.log("You are now at "+player.location.character+"'s house!");
            player.location.greet();
        }
        else{
            console.log("You can't go west from here!")
        }
    }
    else{
        console.log("That's not a valid option")
    }
}

move("north")
console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*")
move("east")
console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*")
move("north")
console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*")
move("west")
console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*")
move("north")
