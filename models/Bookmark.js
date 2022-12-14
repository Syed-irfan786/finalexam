const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  bookmark: {
    type: String,
    required: true,
  },
  link : {
    type : String,
    required : false
  }
});

module.exports = new mongoose.model("Bookmark", TodoSchema);