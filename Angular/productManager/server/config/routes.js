const products = require("./../controllers/products");
const path = require("path")
module.exports = (app) => {
    app.get("/products", products.getAll)
    app.get("/products/:id",products.getOne)
    app.post("/products",products.create)
    app.put("/products/:id",products.update)
    app.delete("/products/:id",products.delete)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}