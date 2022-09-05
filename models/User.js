const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const UserSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true, versionKey: false }
)

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)

module.exports = UserModel
