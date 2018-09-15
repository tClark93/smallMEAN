const restaurants = require("../controllers/rest");
const path = require("path")

module.exports = (app) => {
    app.get("/establishments", restaurants.getAll)
    app.get("/establishments/:id",restaurants.getOne)
    app.post("/establishments",restaurants.create)
    app.post("/establishments/:id",restaurants.review)
    app.put("/establishments/:id",restaurants.update)
    app.delete("/establishments/:id",restaurants.delete)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}