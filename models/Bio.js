const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const BioSchema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true, versionKey: false }
)

const BioModel =
  mongoose.models.Bio || mongoose.model("Bio", BioSchema)

module.exports = BioModel
