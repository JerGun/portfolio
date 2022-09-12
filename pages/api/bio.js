import { NextResponse } from "next/server"
const { connectToDatabase } = require("../../lib/mongodb")
import * as jose from "jose"
import BioModel from "../../models/Bio"

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
      return getBios(req, res)

    case "POST":
      return addBio(req, res)

    // case "PUT":
    //   return updateExperience(req, res)

    // case "DELETE":
    //   return deleteExperience(req, res)
  }
}

const getBios = async (req, res) => {
  try {
    await connectToDatabase()
    let result = await BioModel.find()
    res.send(result)
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}

const addBio = async (req, res) => {
  try {
    await connectToDatabase()
    let result = await BioModel.create(req.body)
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
