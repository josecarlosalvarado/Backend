const express = require('express');

const mongoose = require("mongoose");

const todos = require("./routes/todos");

const app = express();

app.use(express.json());

app.use("/todos", todos);

require("./config/config");


mongoose.connect("mongodb://localhost:27017/todoList", {
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