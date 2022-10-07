import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Sidebar from "@components/admin/Sidebar"
import Button from "@components/Button"
import Input from "@components/Input"
import axios from "axios"
import UploadFile from "@components/UploadFile"

export default function Certificates() {

  const router = useRouter()

  const [payload, setPayload] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const watchLocalStorage = () => {
    setPayload({ ...payload, image: localStorage.getItem("file") })
    console.log(localStorage.getItem("file"))
  }

  const saveHandler = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      await axios
        .post("/api/certificate", payload)
        .then((res) => {
          setIsLoading(false)
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
    <div className="h-screen w-full flex bg-background opacity-90">
      <Head>
        <title>Portfolio | Admin - Certificates</title>
        <meta name="description" content="pawaret.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <span className="h-full w-0.5 bg-black"></span>
      <div className="h-full w-full flex flex-col items-center p-10 space-y-10">
        <p className="text-xl font-bold">Add Certificate</p>
        <form
          className="h-full w-1/2 flex flex-col items-center space-y-10"
          onSubmit={saveHandler}
        >
          <Input
            placeholder={"Title"}
            w={"w-full"}
            onChange={(e) => setPayload({ ...payload, title: e.target.value })}
          />
          <UploadFile />
          <Button title={"Save"} isLoading={isLoading} />
        </form>
      </div>
    </div>
  )
}
