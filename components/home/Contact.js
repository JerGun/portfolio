import Button from "@components/Button"
import Input from "@components/Input"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

export default function Contact() {
  const captchaRef = useRef(null)

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const [isSendDisable, setIsSendDisable] = useState(true)

  useEffect(() => {
    checkForm()
  }, [form])

  const checkForm = () => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!pattern.test(form.email) && form.email?.length != 0)
      setIsEmailError(true)
    else setIsEmailError(false)

    if (
      form.name.length != 0 &&
      form.email.length != 0 &&
      form.message.length != 0 &&
      isEmailError
    )
      setIsSendDisable(false)
    else setIsSendDisable(true)
  }

  const sendHandler = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await axios
        .post("/api/send", { token: captchaRef.current.getValue() })
        .then(async (res) => {
          captchaRef.current.reset()
          setIsLoading(false)
        })
    } catch (error) {
      console.log("Error sending email: ", error)
    }
  }

  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-10">
      <p className="text-4xl font-bold capitalize">Contact</p>
      <div className="w-full flex flex-col items-center px-32 space-y-10">
        <div className="space-y-5">
          <div className="flex justify-center">
            <img src="../images/logo.png" alt="" className="h-24 w-24" />
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="mailto:pawaret.muengkaew@outlook.com"
              className="h-10 w-10 flex items-center justify-center border rounded-full transition-all duration-500 ease-in-out hover:bg-primary hover:border-primary hover:text-[#333333] hover:scale-110"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <p>pawaret.muengkaew@outlook.com</p>
          </div>
        </div>
        {/* <div className="flex flex-col items-center space-y-3">
          <p>Use the form below to contact me directly via email.</p>
          <p>Please be sure to fill in your name and correct email address.</p>
        </div> */}
        <form
          className="w-1/2 flex flex-col items-center space-y-10"
          onSubmit={sendHandler}
        >
          <div className="w-full space-y-5">
            <Input
              placeholder={"Name"}
              w={"w-full"}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <div className="w-full space-y-3 transition-all duration-300 ease-in-out">
              <Input
                placeholder={"Email"}
                w={"w-full"}
                type={"email"}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <p
                className={`${
                  isEmailError && "h-5 opacity-100"
                } h-0 px-5 text-sm transition-all duration-300 ease-in-out opacity-0 text-red-400`}
              >
                Please enter valid email.
              </p>
            </div>
            <textarea
              className="h-36 w-full flex items-center p-2 px-5 rounded-xl bg-input"
              placeholder="Message"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <div className="w-full flex justify-center">
              <ReCAPTCHA
                sitekey={process.env.RECAPTCHA_SITE_KEY}
                ref={captchaRef}
              />
            </div>
          </div>
          <Button
            title={"Send Message"}
            isLoading={isLoading}
            isDisable={isSendDisable}
          />
        </form>
      </div>
    </div>
  )
}
