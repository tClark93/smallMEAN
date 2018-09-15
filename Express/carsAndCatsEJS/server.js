const express = require("express");
const app = express();
const PORT = 6699;

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/images"));
app.use(express.static(__dirname + "/static/stylesheets"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
}).js