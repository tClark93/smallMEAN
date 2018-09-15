const seals = require("./../controllers/SealController");

module.exports = (app) => {
    app.get("/", seals.index)
    app.get("/seals/new", seals.addSeal)
    app.get("/seals/:id", seals.idSeal)
    app.get("/seals/edit/:id", seals.updateSeal)
    app.get("/seals/destroy/:id", seals.destroySeal)
    app.post("/create", seals.create)
    app.post("/update/:id", seals.update)
}