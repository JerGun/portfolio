import { NextResponse } from "next/server"
const { connectToDatabase } = require("../../../lib/mongodb")
import * as jose from "jose"
import ExperienceModel from "../../../models/Experience"

export default async function handler(req, res) {
//   const jwt = req.headers.authorization
//   if (!jwt || jwt == "Bearer null") {
//     return res.status(200).send("Invalid Token")
//   } else {
//     const r = await jose.jwtVerify(
//       jwt,
//       new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
//     )
//     req.decodedToken = r.id
//     NextResponse.next()
//   }

  switch (req.method) {
    case "GET":
      return getExperiences(req, res)

    case "POST":
      return addExperience(req, res)

    case "PUT":
      return updateExperience(req, res)

    case "DELETE":
      return deleteExperience(req, res)
  }
}

async function getExperiences(req, res) {
  try {
    let { db } = await connectToDatabase()
    let experiences = await db.collection("experiences").find({}).toArray()
    return res.json(experiences)
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}

async function addExperience(req, res) {
    console.log(req.body);
  try {
    let result = await ExperienceModel.create(req.body)
    res.send(result)
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}

async function updateExperience(req, res) {
  try {
    let { db } = await connectToDatabase()

    await db.collection("posts").updateOne(
      {
        _id: new ObjectId(req.body),
      },
      { $set: { published: true } }
    )

    return res.json({
      message: "Post updated successfully",
      success: true,
    })
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}

async function deleteExperience(req, res) {
  try {
    let { db } = await connectToDatabase()

    await db.collection("posts").deleteOne({
      _id: new ObjectId(req.body),
    })

    return res.json({
      message: "Post deleted successfully",
      success: true,
    })
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}
