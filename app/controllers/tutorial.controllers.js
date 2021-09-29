const db = require("../models");
const Tutorial = db.tutorials;

//Create and Save a new Tutorial
exports.create = (req, res) => {
    //validation
    if (!req.body.title) {
        res.status(400).send({ message: "please include a title" });
        return;
    }

    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    })

    tutorial.save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error encountered while creating the tutorial."
            });
        });
};

// Retrieve all Tutorials from the database
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {title: { $regex: new RegExp(title), $options: "i"}} : {};

    Tutorial.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "A message occurred while retrieving tutorials"
            });
        });

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request.
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials.
exports.findAllPublished = (req, res) => {

};

