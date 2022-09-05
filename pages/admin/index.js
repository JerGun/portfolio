import axios from "axios"
import Head from "next/head"
import { useEffect, useState } from "react"
import Sidebar from "../../components/admin/Sidebar"
import UploadFile from "../../components/UploadFile"

export default function Admin() {
  const [experiences, setExperiences] = useState([])

  useEffect(() => {
    fetchExperiences()
  }, [])

  const fetchExperiences = async () => {
    await axios.get("/api/experience").then((res) => {
      setExperiences(res.data)
    })
  }

  return (
    <div className="h-screen w-full flex bg-background opacity-90">
      <Head>
        <title>Portfolio | Admin - Dashboard</title>
        <meta name="description" content="pawaret.dev" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Sidebar />
      <span className="h-full w-0.5 bg-black"></span>
      <div className="w-full p-10">
        <div className="h-10 w-full grid grid-cols-4 text-center items-center bg-primary">
          <p>Title</p>
          <p>Organization</p>
          <p>From Date</p>
          <p>To Date</p>
        </div>
        <div className="h-full w-full justify-center">
          {experiences &&
            experiences.map((experience, i) => (
              <div
                className="w-full grid grid-cols-4 p-5 rounded-xl bg-white text-black"
                key={i}
              >
                <p className="">{experience.title}</p>
                <p className="">{experience.organization}</p>
                <p className="">{`${new Date(experience.fromDate).getDate()}/${
                  new Date(experience.fromDate).getMonth() + 1
                }/${new Date(experience.fromDate).getFullYear()}`}</p>
                <p className="">{`${new Date(experience.toDate).getDate()}/${
                  new Date(experience.toDate).getMonth() + 1
                }/${new Date(experience.toDate).getFullYear()}`}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
