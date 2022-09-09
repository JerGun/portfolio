import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import Sidebar from "@components/admin/Sidebar"
import Button from "@components/Button"
import Input from "@components/Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheck,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

export default function Bio() {
  const router = useRouter()

  const [payload, setPayload] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [inputAttributes, setInputAttributes] = useState({
    name: "",
    placeholder: "",
    type: "",
  })
  const [inputList, setInputList] = useState([])
  const [isAdd, setIsAdd] = useState(false)

  const saveHandler = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      await axios
        .post("/api/bio", payload)
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

  const addInput = () => {
    setIsAdd(false)
    setInputList([...inputList, inputAttributes])
    setInputAttributes({})
  }

  const removeInput = (name) => {
    setInputList([inputList.filter((e) => e.name != name)])
  }

  return (
    <div className="h-screen w-full flex bg-background opacity-90">
      <Head>
        <title>Portfolio | Admin - Bio</title>
        <meta name="description" content="pawaret.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <span className="h-full w-0.5 bg-black"></span>
      <div className="h-full w-full flex flex-col items-center p-10 space-y-10">
        <p className="text-xl font-bold">Add Bio</p>
        <form
          className="w-1/2 flex flex-col items-center space-y-10"
          onSubmit={saveHandler}
        >
          <Input
            placeholder={"Title"}
            w={"w-full"}
            onChange={(e) => setPayload({ ...payload, title: e.target.value })}
          />
          <Input
            placeholder="Description"
            w={"w-full"}
            onChange={(e) =>
              setPayload({ ...payload, description: e.target.value })
            }
            // onChange={(e) => {
            //   setPayload({ ...payload, title: e.target.value })
            // }}
          />
          {inputList.map((input, i) => (
            <Input
              placeholder={input.placeholder}
              w={"w-full"}
              key={i}
              // onChange={(e) => {
              //   setPayload({ ...payload, title: e.target.value })
              // }}
            />
          ))}
          <div className="flex flex-col items-center justify-center space-y-5">
            {isAdd && (
              <div className="flex space-x-5">
                <Input
                  placeholder={"Name"}
                  w={"w-full"}
                  value={inputAttributes.name}
                  onChange={(e) =>
                    setInputAttributes({
                      ...inputAttributes,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder={"Placeholder"}
                  w={"w-full"}
                  value={inputAttributes.placeholder}
                  onChange={(e) =>
                    setInputAttributes({
                      ...inputAttributes,
                      placeholder: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder={"Type"}
                  w={"w-full"}
                  value={inputAttributes.type}
                  onChange={(e) =>
                    setInputAttributes({
                      ...inputAttributes,
                      type: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
                  className="h-12 px-4 rounded-xl bg-green-500"
                  onClick={() => addInput()}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              </div>
            )}
            <button
              type="button"
              className="h-12 w-12 rounded-xl bg-secondary"
              onClick={() => setIsAdd(!isAdd)}
            >
              <FontAwesomeIcon icon={isAdd ? faMinus : faPlus} />
            </button>
          </div>
          <Button title={"Save"} isLoading={isLoading} />
        </form>
      </div>
    </div>
  )
}
