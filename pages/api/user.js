import UserModel from "../../models/User"

const { connectToDatabase } = require("../../lib/mongodb")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getUsers(req, res)

    case "POST":
      return addUser(req, res)
  }
}

const getUsers = async (req, res) => {
  try {
    await connectToDatabase()
    const user = await UserModel.findOne().where({
      username: req.body.username,
    })
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    if (user) {
      res.send("Username already exist!")
    } else {
      // let result = await UserModel.create(req.body)
      // res.send(result)
    }
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}

const addUser = async (req, res) => {
  try {
    await connectToDatabase()
    const user = await UserModel.findOne().where({
      username: req.body.username,
    })
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    if (user) {
      res.send("Username already exist!")
    } else {
      // let result = await UserModel.create(req.body)
      // res.send(result)
    }
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    })
  }
}
