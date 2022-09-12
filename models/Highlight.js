const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const HighlightSchema = new Schema(
  {
    title: String,
  },
  { timestamps: true, versionKey: false }
)

const HighlightModel =
  mongoose.models.Highlight || mongoose.model("Highlight", HighlightSchema)

module.exports = HighlightModel
