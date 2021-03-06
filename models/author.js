const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
id: String,
first_name: String,
last_name: String
},{
	versionKey: false
});
const Author = mongoose.model("author", authorSchema, "author");
module.exports = Author;