const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

let UserModel = mongoose.model("users", userSchema);

module.exports.UserModel = UserModel;