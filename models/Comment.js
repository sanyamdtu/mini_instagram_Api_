var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Comments_story = new Schema({
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("comments", Comments_story);
