const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
const PORT = 1234

var bodyParser = require('body-parser');
var session = require("express-session");
var flash = require("express-flash");


app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.use(flash());
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(__dirname + "/static/stylesheets"));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})