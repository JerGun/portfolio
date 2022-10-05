export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return sendEmail(req, res)
  }
}

const sendEmail = (req, res) => {
  // TODO : use EmailJS to send mail
}
