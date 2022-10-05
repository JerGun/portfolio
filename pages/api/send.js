import axios from "axios"

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return sendEmail(req, res)
  }
}

const verifyRecaptcha = (token) => {
  return new Promise(async (resolve, reject) => {
    await axios
      .post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
      )
      .then((response) => {
        resolve(response.data.success)
      })
  })
}

const sendEmail = async (req, res) => {
  const { name, email, message, token } = req.body
  const isVerify = await verifyRecaptcha(token)
  console.log(isVerify)
  // TODO : use EmailJS to send mail
}
