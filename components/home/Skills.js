import CSharp from "@components/icons/CSharp"
import CSS from "@components/icons/CSS"
import Ethers from "@components/icons/Ethers"
import Express from "@components/icons/Express"
import Firebase from "@components/icons/Firebase"
import Flutter from "@components/icons/Flutter"
import GitHub from "@components/icons/GitHub"
import GitHubPages from "@components/icons/GitHubPages"
import GitLab from "@components/icons/GitLab"
import Headless from "@components/icons/Headless"
import Heroku from "@components/icons/Heroku"
import HTML from "@components/icons/HTML"
import Java from "@components/icons/Java"
import JavaScript from "@components/icons/JavaScript"
import Kotlin from "@components/icons/Kotlin"
import MongoDB from "@components/icons/MongoDB"
import MySQL from "@components/icons/MySQL"
import Nest from "@components/icons/Nest"
import Next from "@components/icons/Next"
import Node from "@components/icons/Node"
import Nuxt from "@components/icons/Nuxt"
import Python from "@components/icons/Python"
import React from "@components/icons/React"
import Rust from "@components/icons/Rust"
import Solidity from "@components/icons/Solidity"
import SpringBoot from "@components/icons/SpringBoot"
import SQLite from "@components/icons/SQLite"
import Tailwind from "@components/icons/Tailwind"
import TypeScript from "@components/icons/TypeScript"
import Vercel from "@components/icons/Vercel"
import Web3 from "@components/icons/Web3"
import DevSkills from "@components/skills/DevSkills"
import SkillItem from "@components/skills/SkillItem"
import { faCloud, faCodeBranch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const backendSkills = [
  {
    header: "languages",
    items: [
      {
        name: "TypeScript",
        icon: <TypeScript />,
      },
      {
        name: "JavaScript",
        icon: <JavaScript />,
      },
      {
        name: "Python",
        icon: <Python />,
      },
      {
        name: "Kotlin",
        icon: <Kotlin />,
      },
      {
        name: "Java",
        icon: <Java />,
      },
      {
        name: "Solidity",
        icon: <Solidity />,
      },
      {
        name: "C#",
        icon: <CSharp />,
      },
      {
        name: "Rust",
        icon: <Rust />,
      },
    ],
  },
  {
    header: "frameworks",
    items: [
      {
        name: "Node.js",
        icon: <Node />,
      },
      {
        name: "Express.js",
        icon: <Express />,
      },
      {
        name: "Nest.js",
        icon: <Nest />,
      },
      {
        name: "SpringBoot",
        icon: <SpringBoot />,
      },
    ],
  },
  {
    header: "databases",
    items: [
      {
        name: "MongoDB",
        icon: <MongoDB />,
      },
      {
        name: "Firebase",
        icon: <Firebase />,
      },
      {
        name: "MySQL",
        icon: <MySQL />,
      },
      {
        name: "SQLite",
        icon: <SQLite />,
      },
    ],
  },
]

const frontendSkills = [
  {
    header: "languages",
    items: [
      {
        name: "HTML",
        icon: <HTML />,
      },
      {
        name: "CSS",
        icon: <CSS />,
      },
      {
        name: "",
        icon: "",
      },
      {
        name: "",
        icon: "",
      },
    ],
  },
  {
    header: "frameworks",
    items: [
      {
        name: "Next.js",
        icon: <Next />,
      },
      {
        name: "React.js",
        icon: <React />,
      },
      {
        name: "Nuxt.js",
        icon: <Nuxt />,
      },
      {
        name: "Flutter",
        icon: <Flutter />,
      },
    ],
  },
  {
    header: "libraries",
    items: [
      {
        name: "Ethers.js",
        icon: <Ethers />,
      },
      {
        name: "Web3.js",
        icon: <Web3 />,
      },
      {
        name: "Tailwind CSS",
        icon: <Tailwind />,
      },
      {
        name: "Headless UI",
        icon: <Headless />,
      }
    ],
  },
]

export default function Skills() {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 768
        return window.innerWidth < maxWidth
      },
      duration: 800,
    })
  }, [])

  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold">Skills</p>
      <div className="w-9/12 flex flex-col items-center space-y-20">
        <div className="h-full w-full flex flex-col justify-center space-y-16 divide-opacity-30 divide-white md:space-y-0 md:divide-x md:flex-row">
          <DevSkills title="Backend Dev" skills={backendSkills} />
          {/* <div className="h-full w-full flex flex-col items-center space-y-10">
            <div className="h-fit w-fit flex flex-col items-center space-y-5">
              <FontAwesomeIcon
                icon={faGamepad}
                size="2x"
                className="text-primary"
              />
              <p className="text-xl font-bold">Game</p>
            </div>
            <SkillItem icon={<Unity />} name="Unity" />
          </div> */}
          <DevSkills title="Frontend Dev" skills={frontendSkills} />
        </div>
        <span className="h-[0.5px] w-full bg-white bg-opacity-30 hidden md:block"></span>
        <div className="w-full md:grid grid-cols-7 justify-center space-y-10 md:space-y-0 md:divide-x divide-opacity-30 divide-white">
          <div className="h-full w-full flex flex-col items-center col-span-2 space-y-5" data-aos="zoom-in-right">
            <div className="h-fit w-fit flex flex-col items-center space-y-5">
              <FontAwesomeIcon icon={faCodeBranch} size="2x" className="text-primary" />
              <p className="text-xl font-bold">Version Control</p>
            </div>
            <div className="w-full grid grid-cols-2 place-items-center gap-10">
              <SkillItem icon={<GitHub />} name="GitHub" />
              <SkillItem icon={<GitLab />} name="GitLab" />
            </div>
          </div>
          <div className="h-full w-full flex flex-col items-center col-span-3 space-y-5" data-aos="zoom-in-up">
            <div className="h-fit w-fit flex flex-col items-center space-y-5">
              <FontAwesomeIcon icon={faCloud} size="2x" className="text-primary" />
              <p className="text-xl font-bold">Hosting</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10 px-10">
              <SkillItem icon={<Heroku />} name="Heroku" />
              <SkillItem icon={<GitHubPages />} name="GitHub Pages" />
              <SkillItem icon={<Vercel />} name="Vercel" />
            </div>
          </div>
          <div className="h-full w-full flex flex-col items-center col-span-2 space-y-5" data-aos="zoom-in-left">
            <div className="h-fit w-fit flex flex-col items-center space-y-5">
              <FontAwesomeIcon icon={faCodeBranch} size="2x" className="text-primary" />
              <p className="text-xl font-bold">CI/CD</p>
            </div>
            <div className="w-full grid grid-cols-2 place-items-center gap-10">
              <SkillItem icon={<GitHub />} name="GitHub Action" />
              <SkillItem icon={<GitLab />} name="GitLab CI" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
