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
