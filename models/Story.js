var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Stories = new Schema({
  expire_at: { type: Date, default: Date.now, expires: 86400 },
  caption: {
    type: String,
    required: true,
  },
  pic1: {
    type: String,
    required: true,
  },
  pic2: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Stories", Stories);
