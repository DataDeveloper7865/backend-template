module.exports = app => {
    const tutorials = require("../controllers/tutorial.controllers.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.get(":/id", tutorials.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);

    app.use("/api/tutorials", router);

}