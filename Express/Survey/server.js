const express = require("express");
var app = express();
const PORT = 1234;
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/stylesheets"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
}).js