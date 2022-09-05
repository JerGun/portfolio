import Head from "next/head"
import Input from "../../../components/Input"
import { useState } from "react"
import axios from "axios"
import cookieCutter from "cookie-cutter"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons"
import Button from "../../../components/Button"

export default function Login() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const [payload, setPayload] = useState({
    username: "",
    password: "",
  })

  const loginHandler = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      await axios
        .post("/api/auth", payload)
        .then((res) => {
          setIsLoading(false)
          cookieCutter.set("accessToken", res.data.token)
          router.push({ pathname: "/admin" })
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log("Error uploading file: ", error)
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center space-y-5 bg-subBackground">
      <Head>
        <title>Portfolio | Admin - Login</title>
        <meta name="description" content="pawaret.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form
        className="h-3/4 w-1/3 flex flex-col items-center space-y-10 px-10 py-10 rounded-2xl bg-background opacity-90"
        onSubmit={loginHandler}
      >
        <img src="images/logo.png" alt="pawaret.dev" className="h-20 w-20" />
        <div>
          <div className="flex space-x-3 uppercase font-bold text-2xl">
            <p className="text-primary">Admin</p>
            <p className="">Panel</p>
          </div>
          <div className="flex space-x-3">
            <p>Pawaret </p>
            <p>Muengkaew</p>
          </div>
        </div>
        <div className="w-3/4 flex items-center space-x-3">
          <FontAwesomeIcon icon={faUser} />
          <Input
            placeholder={"Username"}
            w={"w-full"}
            onChange={(e) =>
              setPayload({ ...payload, username: e.target.value })
            }
          />
        </div>
        <div className="w-3/4 flex items-center space-x-3">
          <FontAwesomeIcon icon={faKey} />
          <Input
            type={"password"}
            placeholder={"Password"}
            w={"w-full"}
            onChange={(e) =>
              setPayload({ ...payload, password: e.target.value })
            }
          />
        </div>
        <Button title={"Login"} isLoading={isLoading} />
      </form>
    </div>
  )
}
