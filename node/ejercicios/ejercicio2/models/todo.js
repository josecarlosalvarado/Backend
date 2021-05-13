const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    check: {
        type: Boolean,
        default: false
    }

});

todoSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"});

module.exports = mongoose.model("Todo", todoSchema);