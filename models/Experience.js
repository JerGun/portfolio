const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const ExperienceSchema = new Schema(
  {
    title: String,
    organization: String,
    fromDate: Date,
    toDate: Date,
  },
  { timestamps: true, versionKey: false }
)

const ExperienceModel =
  mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema)

module.exports = ExperienceModel
