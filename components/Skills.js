import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCloud,
  faCode,
  faCodeBranch,
  faGamepad,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons"
import Express from "./icons/Express"
import SkillItem from "./skills/SkillItem"
import SpringBoot from "./icons/SpringBoot"
import Nest from "./icons/Nest"
import Node from "./icons/Node"
import Firebase from "./icons/Firebase"
import JavaScript from "./icons/JavaScript"
import Solidity from "./icons/Solidity"
import Python from "./icons/Python"
import Java from "./icons/Java"
import CSharp from "./icons/CSharp"
import Tailwind from "./icons/Tailwind"
import Unity from "./icons/Unity"
import Kotlin from "./icons/Kotlin"
import DevSkills from "./skills/DevSkills"
import Flutter from "./icons/Flutter"
import Next from "./icons/Next"
import React from "./icons/React"
import Nuxt from "./icons/Nuxt"
import SQLite from "./icons/SQLite"
import HTML from "./icons/HTML"
import Heroku from "./icons/Heroku"
import CSS from "./icons/CSS"
import MongoDB from "./icons/MongoDB"
import Web3 from "./icons/Web3"
import Vercel from "./icons/Vercel"
import MySQL from "./icons/MySQL"
import GitHub from "./icons/GitHub"
import GitLab from "./icons/GitLab"
import GitHubPages from "./icons/GitHubPages"
import Anime from "./icons/Headless"
import Headless from "./icons/Headless"

const backendSkills = [
  {
    header: "languages",
    items: [
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
      },
    ],
  },
]

export default function Skills() {
  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold">Skills</p>
      <div className="w-full grid grid-cols-4 justify-center divide-x divide-opacity-30 px-32 divide-white">
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
      <span className="h-[0.5px] w-10/12 bg-white bg-opacity-30"></span>
      <div className="w-full grid grid-cols-7 justify-center divide-x divide-opacity-30 px-20 divide-white">
        <div className="h-full w-full flex flex-col items-center col-span-2 space-y-5">
          <div className="h-fit w-fit flex flex-col items-center space-y-5">
            <FontAwesomeIcon
              icon={faCodeBranch}
              size="2x"
              className="text-primary"
            />
            <p className="text-xl font-bold">Version Control</p>
          </div>
          <div className="w-full grid grid-cols-2 place-items-center gap-10">
            <SkillItem icon={<GitHub />} name="GitHub" />
            <SkillItem icon={<GitLab />} name="GitLab" />
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-center col-span-3 space-y-5">
          <div className="h-fit w-fit flex flex-col items-center space-y-5">
            <FontAwesomeIcon
              icon={faCloud}
              size="2x"
              className="text-primary"
            />
            <p className="text-xl font-bold">Hosting</p>
          </div>
          <div className="grid grid-cols-3 place-items-center gap-10 px-10">
            <SkillItem icon={<Heroku />} name="Heroku" />
            <SkillItem icon={<GitHubPages />} name="GitHub Pages" />
            <SkillItem icon={<Vercel />} name="Vercel" />
          </div>
        </div>
        <div className="h-full w-full flex flex-col items-center col-span-2 space-y-5">
          <div className="h-fit w-fit flex flex-col items-center space-y-5">
            <FontAwesomeIcon
              icon={faCodeBranch}
              size="2x"
              className="text-primary"
            />
            <p className="text-xl font-bold">CI/CD</p>
          </div>
          <div className="w-full grid grid-cols-2 place-items-center gap-10">
            <SkillItem icon={<GitHub />} name="GitHub Action" />
            <SkillItem icon={<GitLab />} name="GitLab CI" />
          </div>
        </div>
      </div>
    </div>
  )
}
