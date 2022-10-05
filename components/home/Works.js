import {
  faArrowUpRightFromSquare,
  faCode,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import Projects from "../Projects"

const projects = [
  {
    name: "Ticketplace",
    description:
      "Ticketplace is a ticket decentralized exchange website. that uses Blockchain technology to solve the problem of ticket fraud.",
    img: "/images/ticketplace.jpeg",
    tech: [
      "React.js",
      "Node.js",
      "Solidity",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Binance Smart Chain",
    ],
    sourceCode: "https://github.com/JerGun/ticketplace",
    live: "https://ticketplace.me/",
    date: "03/2022",
    active: false,
    status: "archive",
    style: "object-left object-cover",
  },
  {
    name: "Discord Bot",
    description:
      "A Discord bot built for fun. It includes a variety of features based on the builder needs, such as browsing the latest cryptocurrency prices, viewing today classes, yesterday classes or by specific day.",
    img: "/images/discord.jpeg",
    tech: ["Node.js", "Discord.js", "JavaScript"],
    sourceCode: "https://github.com/JerGun/Discord-Bot",
    live: "https://discord.com/api/oauth2/authorize?client_id=908733995326533652&permissions=431644670016&scope=bot",
    date: "11/2021",
    active: false,
    status: "archive",
  },
  {
    name: "Assign Me",
    description:
      "An application for assignments to students. You can create groups and separate channels independently. Afther that you can create assignments in individual groups and channels It also generates a summary of all scores at the end of the course.",
    img: "/images/assignme.png",
    tech: ["Flutter", "Dart", "Firebase", "Firestore"],
    sourceCode: "https://github.com/JerGun/AssignMe",
    live: "",
    date: "10/2021",
    active: false,
    status: "archive",
    style: "object-contain",
    mobile: true
  },
  {
    name: "Covid19",
    description:
      "An application for tracking coronavirus (Covid-19) using easysunday API to retrieve data about infected record in Thailand.",
    img: "/images/covid19.png",
    tech: ["Flutter", "Dart"],
    sourceCode: "https://github.com/JerGun/Flutter-Covid19",
    live: "",
    date: "09/2021",
    active: false,
    status: "archive",
    style: "object-contain",
    mobile: true
  },
  {
    name: "UDIX",
    description:
      "A web page made for coding practice with Nuxt.js and this web will have only the frontend that will be decorated using tailwind css.",
    img: "/images/udix.jpeg",
    tech: ["Nuxt.js", "Tailwind CSS"],
    sourceCode: "https://github.com/JerGun/First-NuxtJS",
    live: "https://jergun.github.io/First-NuxtJS/",
    date: "05/2021",
    active: false,
    status: "archive",
  },
  {
    name: "PillRem",
    description:
      "An application made for coding practice with Java and using SQLite as database. This application is about medication reminder and doctor appointment",
    img: "/images/pillrem.png",
    tech: ["Java", "SQLite"],
    sourceCode: "https://github.com/JerGun/PillRem",
    live: "",
    date: "10/2020",
    active: false,
    status: "archive",
    style: "object-contain",
    mobile: true
  },
]

export default function Works() {
  // const [projects, setProjects] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // await axios.get("/api/bio").then((res) => {
    //   let bios = []
    //   res.data.forEach((e) => {
    //     bios.push(e)
    //   })
    //   setBios(bios)
    // })
    // await axios.get("/api/highlight").then((res) => {
    //   let highlights = []
    //   res.data.forEach((e) => {
    //     highlights.push(e.title)
    //     highlights.push(3000)
    //   })
    //   setHighlights(highlights)
    // })
    // setIsLoading(false)
  }

  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold capitalize">Works</p>
      <div className="w-full space-y-20 px-32">
        {/* <div className="h-16 w-fit space-x-3 px-10 flex items-center justify-center rounded-xl  text-black bg-white shadow-xl border border-customGrayLight">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-xl font-bold">ACTIVE PROJECTS</p>
        </div> */}
        {/* <Projects title="Active Projects" projects={projects} active={true} /> */}
        <Projects
          title="Selected Projects"
          projects={projects}
          active={false}
        />
      </div>
    </div>
  )
}
