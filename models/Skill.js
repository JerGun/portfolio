const mongoose = require("mongoose")
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const SkillSchema = new Schema(
  {
    title: String,
    type: String,
    parentId: String,
  },
  { timestamps: true, versionKey: false }
)

const SkillModel =
  mongoose.models.Skill || mongoose.model("Skill", SkillSchema)

module.exports = SkillModel
