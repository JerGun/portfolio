import axios from "axios"

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return verifyRecaptcha(req, res)
  }
}

const verifyRecaptcha = async (req, res) => {
  const { token } = req.body
  await axios
    .post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    )
    .then((response) => {
      res.send(response.data.success)
    })
}
