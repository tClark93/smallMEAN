const users = require("./../controllers/UserController");

module.exports = (app) => {
    app.get("/", users.index)
    app.post("/create", users.create)
    app.get("/quotes", users.quotes)
}