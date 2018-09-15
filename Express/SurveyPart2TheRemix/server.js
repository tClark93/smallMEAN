const express = require("express");

var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

const server = app.listen(1337);
const io = require('socket.io')(server);

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

io.on('connection', function (socket) {
    socket.on('submit', function (data) { 
      rand = Math.floor(Math.random()*1000)+1
      data.form.rand = rand
      socket.emit('return',{return:data.form})
      console.log(data.form)
    });
      
  });