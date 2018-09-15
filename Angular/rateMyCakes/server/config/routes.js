const cakes = require("./../controllers/cakes");

module.exports = (app) => {
    // app.get("/", cakes.index)
    app.get("/cakes", cakes.getAll)
    app.get("/cakes/:id",cakes.getOne)
    app.post("/cakes",cakes.create)
    app.post("/cakes/:id",cakes.rate)
    app.put("/cakes/:id",cakes.update)
    app.delete("/cakes/:id",cakes.delete)
}