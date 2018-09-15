const posts = require("./../controllers/Controller");

module.exports = (app) => {
    app.get("/", posts.index)
    app.post("/postPost", posts.create)
    app.post("/createComment/:id", posts.createComment)
}