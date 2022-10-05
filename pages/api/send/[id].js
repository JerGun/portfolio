import axios from "axios"

export default function handler(req, res) {
  const { id } = req.query

  switch (req.method) {
    case "POST":
      if (id == "verify") return verifyRecaptcha(req, res)
  }
}

const verifyRecaptcha = async (req, res) => {
  const { token } = req.body
  try {
    await axios
      .post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
      )
      .then((response) => {
        res.send(response.data)
      })
  } catch (error) {
    console.log("Error sending email: ", error)
  }
}
