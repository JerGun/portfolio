import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { create as ipfsHttpClient } from "ipfs-http-client"
import cookieCutter from "cookie-cutter"
import axios from "axios"
import Input from "./Input"

const projectId = process.env.INFURA_PROJECT_ID
const projectSecret = process.env.INFURA_API_KEY
console.log(projectId)
console.log(projectSecret)

const client = ipfsHttpClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization:
      "Basic " +
      Buffer.from(projectId + ":" + projectSecret).toString("base64"),
  },
})

export default function UploadFile({ type }) {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState({ preview: "", raw: "" })
  const [value, setValue] = useState(0)
  const [isRequired, setIsRequired] = useState(false)

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    try {
      await client
        .add(file, {
          progress: (progressEvent) => {
            setValue((progressEvent / file.size) * 100)
          },
        })
        .then((res) => {
          const url = `https://ipfs.infura.io/ipfs/${res.path}`
          setImage({ ...image, preview: url, raw: file })
          setValue(0)
        })
    } catch (error) {
      console.log("Error uploading file: ", error)
    }
  }

  const uploadFile = async () => {
    if (title.length && image.preview.length) {
      try {
        await axios
          .post(
            `/api/${type}`,
            {
              title: title,
              img: image.preview,
            },
            {
              headers: {
                authorization: cookieCutter.get("accessToken"),
              },
            }
          )
          .then((res) => {
            setTitle("")
            setImage({ preview: "", raw: "" })
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        console.log("Error uploading file: ", error)
      }
    } else setIsRequired(true)
  }

  return (
    <div className="h-full w-1/2 flex flex-col items-center space-y-10">
      <Input
        placeholder={"Title"}
        w={"w-3/4"}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="h-1/2 w-full">
        <div className="relative h-full w-full">
          <label
            htmlFor="upload-button"
            className="absolute h-full w-full rounded-xl hover:cursor-pointer"
          >
            {image.preview ? (
              <div className="relative h-full w-full group rounded-xl">
                <div className="absolute z-10 h-full w-full flex justify-center items-center rounded-xl text-white opacity-0 group-hover:opacity-100">
                  <FontAwesomeIcon icon={faPen} />
                </div>
                <div className="h-full w-full rounded-xl group-hover:opacity-50">
                  <img
                    src={image.preview}
                    alt="Profile"
                    className="h-full w-full rounded-xl object-contain"
                  />
                </div>
              </div>
            ) : (
              <div className="relative h-full w-full group rounded-xl outline-dashed outline-offset-4">
                <div className="absolute h-full w-full rounded-xl bg-input group-hover:opacity-50"></div>
                <div className="absolute z-10 h-full w-full flex justify-center items-center rounded-xl text-white">
                  <FontAwesomeIcon icon={faPen} />
                </div>
              </div>
            )}
          </label>
          <input
            type="file"
            id="upload-button"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="w-3/4 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-primary h-2.5 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <Button title={"Save"} isLoading={isLoading} onClick={uploadFile} />
    </div>
  )
}
