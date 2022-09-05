const mongoose = require("mongoose")

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.DB_NAME

// check the MongoDB URI
if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environmental variable")
}

// check the MongoDB DB
if (!MONGODB_DB) {
  throw new Error("Define the MONGODB_DB environmental variable")
}

export async function connectToDatabase() {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      () => {
        console.log("[Success] : Connected to the database!")
      },
      (error) => {
        console.log("[Failed] : Can't connect to the database!", error)
        process.exit()
      }
    )
}
