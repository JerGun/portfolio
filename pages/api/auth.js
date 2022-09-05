import UserModel from "../../models/User"
import * as jose from "jose"

const { connectToDatabase } = require("../../lib/mongodb")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

export default async function handler(req, res) {
  await connectToDatabase()
  switch (req.method) {
    case "POST":
      return authentication(req, res)
  }
}

const authentication = async (req, res) => {
  try {
    const user = await UserModel.findOne().where({
      username: req.body.username,
    })
    if (!user) {
      res.status(404).send("User not found!")
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = await new jose.SignJWT({ id: user._id })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('3600s')
        .sign(new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET));
        res.send({ token, user })
      } else {
        res.send("Invalid Password")
      }
    }
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}
