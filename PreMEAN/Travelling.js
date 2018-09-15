var eeyore = { character: "Eeyore" };
var heffalumps = { character: "Heffalumps" };
var kanga = { character: "Kanga" };
var owl = { character: "Owl" };
var chris = { character: "Christopher Robin" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var piglett = { character: "Piglett" };
var winnie = { character: "Winnie the Pooh" };
var bees = { character: "Bees" };
var tigger = { character: "Tigger" };

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
            console.log("You are now at "+player.location.character+"'s house!")
        }
        else{
            console.log("You can't go north from here!")
        }
    }
    else if(direction == "east"){
        if(player.location.east != null){
            player.location = player.location.east;
            console.log("You are now at "+player.location.character+"'s house!")
        }
        else{
            console.log("You can't go east from here!")
        }
    }
    else if(direction == "south"){
        if(player.location.south != null){
            player.location = player.location.south;
            console.log("You are now at "+player.location.character+"'s house!")
        }
        else{
            console.log("You can't go south from here!")
        }
    }
    else if(direction == "west"){
        if(player.location.west != null){
            player.location = player.location.west;
            console.log("You are now at "+player.location.character+"'s house!")
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
move("east")
move("north")
move("west")
move("north")
