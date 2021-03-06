const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests content-type - application/json
app.use(express.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
//add database
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("connected to the database!");
    })
    .catch(err => {
        console.log("Error: Cannot connected to database...see:", err)
        process.exit();
    });

//example route
app.get("/", (req, res) => {
    res.json({message: "Welcome to the backend server"});
});

require("./app/routes/item.routes")(app);

//set port and listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`);
});