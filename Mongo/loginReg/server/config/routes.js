const control = require("./../controllers/Controller");

module.exports = (app) => {
    app.get("/", control.index)
    app.get("/success", control.success)
    app.post("/register", control.register)
    app.post("/login", control.login)
}