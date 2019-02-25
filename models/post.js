const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const postSchema = new Schema({
  ownerID: String,
  title: String,
  posted: Date,
  links: URL,
  points: Number,
  id: String, //Is this necessary? I think Mongodb creates an id already on its own
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

module.exports = User;