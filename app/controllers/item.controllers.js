const db = require("../models");
const Item = db.Item;

//Create and Save a new Item
exports.create = (req, res) => {
    //validation
    if (!req.body.title) {
        res.status(400).send({ message: "please include a title" });
        return;
    }

    const item = new Item({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    })

    item.save(item)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error encountered while creating the item."
            });
        });
};

// Retrieve all Items from the database
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {title: { $regex: new RegExp(title), $options: "i"}} : {};

    Item.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "A message occurred while retrieving items"
            });
        });

};

// Find a single Item with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Item.findById(id)
    .then(data => {
        if (!data)
            res.status(404).send({ message: "Did not find an item with id " + id });
        else res.send(data);
    })
    .catch(err => {
        res
            .status(500)
            .send({message: "Error retrieving item with id" + id})
    })

};

// Update an item by the id in the request
exports.update = (req, res) => {

    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty"
        });
    }

    const id = req.params.id;

    Item.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `cannot update item with id=${id}. Item likely not found`
                });
            } else res.send({ message: "Item updated successfully"})
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating item with id = ${id}`
            });
        });
};

// Delete an item with the specified id in the request.
exports.delete = (req, res) => {

    const id = req.params.id;

    Item.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete the item with id=${id}. Item likely not found`
                })
            } else {
                res.send({
                    message: "Item was deleted succesfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete item with id=${id}`
            });
        });
};

// Delete all items from the database.
exports.deleteAll = (req, res) => {
    Item.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Items were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing the items"
            });
        });
};

// Find all published Items.
exports.findAllPublished = (req, res) => {

    Item.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occured while retrieving items"
            });
        });
};

