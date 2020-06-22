var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Comments_story = new Schema({
  // expire_at: { type: Date, default: Date.now, expires: 86400 }
  //if comment were to be deleted also

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
module.exports = mongoose.model("Comments", Comments_story);
