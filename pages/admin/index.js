import axios from "axios"
import Head from "next/head"
import { useEffect, useState } from "react"
import useSWR from "swr"
import Sidebar from "@components/admin/Sidebar"
import UploadFile from "@components/UploadFile"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDown,
  faAngleUp,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons"

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function Admin() {
  const [pageIndex, setPageIndex] = useState(0)
  const [experiences, setExperiences] = useState([])
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetchExperiences()
  }, [])

  const { data } = useSWR(`/api/experience`, fetcher)

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <span className="h-full w-0.5 bg-black"></span>
      <div className="w-full p-10 space-y-3">
        {/* {data?.map((item,i) => (
          <div key={i}>{item.title}</div>
        ))}
        <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
        <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button> */}
        <div className="h-12 w-full grid grid-cols-5 divide-x divide-white text-center uppercase font-bold text-sm items-center rounded-xl bg-input">
          <div className="w-full flex justify-center items-center space-x-5">
            <p>Title</p>
            {/* <FontAwesomeIcon icon={faAngleDown} /> */}
          </div>
          <div className="w-full flex justify-center items-center space-x-5">
            <p>Organization</p>
            {/* <FontAwesomeIcon icon={faAngleDown} /> */}
          </div>
          <div className="w-full flex justify-center items-center space-x-5">
            <p>From Date</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="w-full flex justify-center items-center space-x-5">
            <p>To Date</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <p>Actions</p>
        </div>
        <div className="h-[90%] w-full justify-center space-y-3">
          {experiences &&
            experiences.map((experience, i) => (
              <div
                className="w-full grid grid-cols-5 py-5 rounded-xl text-center items-center text-sm bg-white text-black"
                key={i}
              >
                <p>{experience.title}</p>
                <p>{experience.organization}</p>
                <p>{`${
                  new Date(experience.fromDate).getDate()
                    ? new Date(experience.fromDate).getDate()
                    : "-"
                }/${
                  new Date(experience.fromDate).getMonth() >= 0
                    ? new Date(experience.fromDate).getMonth() + 1
                    : "-"
                }/${
                  new Date(experience.fromDate).getFullYear()
                    ? new Date(experience.fromDate).getFullYear()
                    : "-"
                }`}</p>
                <p>{`${
                  new Date(experience.toDate).getDate()
                    ? new Date(experience.toDate).getDate()
                    : "dd"
                }/${
                  new Date(experience.toDate).getMonth() >= 0
                    ? new Date(experience.toDate).getMonth() + 1
                    : "mm"
                }/${
                  new Date(experience.toDate).getFullYear()
                    ? new Date(experience.toDate).getFullYear()
                    : "yyyy"
                }`}</p>
                <div className="space-x-10">
                  <button>
                    <Link href={"/"}>
                      <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                    </Link>
                  </button>
                  <button className="text-red-500">
                    <Link href={"/"}>
                      <FontAwesomeIcon icon={faTrash} size="lg" />
                    </Link>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
