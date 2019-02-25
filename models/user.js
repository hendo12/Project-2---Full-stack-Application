// models/user.js
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true },
  email: {type: String, required: true, unique: true },
  password: {type: String, required: true, minlength: 8},
  points: Number,
  avatarURL: {
    type: String, default: 'public/images/defaultUser.jpeg'
  },
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", userSchema);

userSchema.plugin(uniqueValidator);

module.exports = User;
