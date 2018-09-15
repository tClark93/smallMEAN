const express = require("express");
const app = express();
const PORT = 1234

app.use(express.static( __dirname + '/public/dist/public'));

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})