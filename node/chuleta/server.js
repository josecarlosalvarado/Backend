const express = require('express');

const mongoose = require("mongoose");

const app = express();

const users = require("./routes/users")

require("./config/config");

// Antes del pendpoints, usamos los middlewers

app.use(express.json());

app.use("/users", users);


mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", err => console.log("connection to DB failed", err));
db.once("open", () => console.log("connected on to DB successfuly"));


app.listen(process.env.PORT, () => {
    console.log("listening on port:", process.env.PORT);
});