import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Sidebar from "../../../components/admin/Sidebar"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import InputDate from "../../../components/InputDate"

export default function Experiences() {
  const router = useRouter()

  const [payload, setPayload] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const saveHandler = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      await axios
        .post("/api/experience", payload)
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
        <title>Portfolio | Admin</title>
        <meta name="description" content="pawaret.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <span className="h-full w-0.5 bg-black"></span>
      <div className="h-full w-full flex flex-col items-center p-10 space-y-10">
        <p className="text-xl font-bold">Add Experience</p>
        <form
          className="w-1/2 flex flex-col items-center space-y-10"
          onSubmit={saveHandler}
        >
          <InputDate
            onChange={(e) =>
              setPayload({ ...payload, fromDate: e.from, toDate: e.to })
            }
          />
          <Input
            placeholder={"Title"}
            w={"w-full"}
            onChange={(e) => setPayload({ ...payload, title: e.target.value })}
          />
          <Input
            placeholder={"Organization"}
            w={"w-full"}
            onChange={(e) =>
              setPayload({ ...payload, organization: e.target.value })
            }
          />
          <Button title={"Save"} isLoading={isLoading} />
        </form>
      </div>
    </div>
  )
}
