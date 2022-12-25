import { faCheck, faTrophy, faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AOS from "aos"
import { useEffect } from "react"

import "aos/dist/aos.css"

const experiences = [
  {
    title: "Backend Developer",
    icon: faUserTie,
    archievement: "",
    descriptions: ["Implemented web server and smart contract for NFTs marketplace."],
    technologies: ["Kotlin", "Spring Boot"],
    company: "OneDee Solution Co., Ltd.,",
    date: "Oct 2022 - Present",
  },
  {
    title: "Fullstack Developer",
    icon: faUserGraduate,
    archievement: "Internship",
    descriptions: [
      "Implemented service that scheduled to proceed transfer employees to other department.",
      "Implementd hook service wiht Discord Webhook",
      "Developed wave-based & third-person shooting game by using Unity, C#",
    ],
    technologies: ["Kotlin", "Spring Boot", "Nest.js"],
    company: "OneDee Solution Co., Ltd.,",
    date: "Apr 2022 - Sep 2022",
  },
  {
    title: "Backend Developer",
    icon: faUserGraduate,
    archievement: "Internship",
    descriptions: ["Implemented activity logs and contributed to making CRUD API."],
    technologies: ["Kotlin", "Spring Boot", "Nest.js"],
    company: "OneDee Solution Co., Ltd.,",
    date: "Apr 2021 - May 2021",
  },
  {
    title: "Entrepreneurial Ecosystem Development",
    icon: faCheck,
    archievement: "Attend",
    descriptions: [
      "Attend on behalf of the Nixing team, the topic was: Food Order Application, where each meal was allocated by a nutritionist.",
    ],
    company: "Innovation and Technology Transfer Institute (UPITI)",
    date: "Mar 2021",
  },
  {
    title: "Hackathon Boot Camp",
    icon: faTrophy,
    archievement: "2nd Place Award (Second Shop)",
    descriptions: ["There are activities to enhance the thinking process in the Software Development Process."],
    company: "20Scoops CNX Co., Ltd.,",
    date: "Mar 2021",
  },
  {
    title: "TPA'S PARTNER",
    icon: faTrophy,
    archievement: "Top 10 finalists",
    descriptions: [
      "TPA's Partner is a project to find students to work with the Thai Programming Association in organizing various activities for students.",
    ],
    company: "Thai Programming Association",
    date: "Jan 2021",
  },
]

export default function Experiences() {
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
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16 text-black dark:text-white">
      <p className="text-4xl font-bold capitalize">Experiences</p>
      <div className="w-9/12">
        {experiences.map((experience, i) => (
          <div className="h-fit w-full flex" key={i}>
            <div className="h-full w-5/12 space-y-3 px-10 py-1.5 hidden lg:block" data-aos="fade-right">
              <p className="text-xl font-bold">{experience.company}</p>
              <p className="text-customGrayHeavy dark:text-text">{experience.date}</p>
            </div>
            <div className="h-full w-full lg:w-7/12 flex">
              <div className="h-full w-fit">
                <div className="relative h-10 w-10 flex flex-col items-center justify-center">
                  <span className="absolute h-10 w-10 rounded-full border-2 border-dashed border-black dark:border-white"></span>
                  <span className="h-5 w-5 rounded-full bg-primary"></span>
                </div>
                <div className="h-full w-10 flex items-center justify-center">
                  <div className="h-[450px] md:h-72 lg:h-52 w-0 border-[0.2px] border-dashed border-black dark:border-white"></div>
                </div>
              </div>
              <div className="h-full w-full md:w-11/12 flex flex-col flex-wrap pl-10 py-1.5" data-aos="zoom-in-left">
                <div className="h-full w-full space-y-3 lg:hidden">
                  <p className="text-xl font-bold">{experience.company}</p>
                  <p className="text-customGrayHeavy dark:text-text">{experience.date}</p>
                </div>
                <p className="md:text-xl font-bold pt-3 md:pt-0">{experience.title}</p>
                {experience.archievement && (
                  <div className="flex items-center space-x-3 pt-3">
                    <FontAwesomeIcon icon={experience.icon} className="text-primary" />
                    <p>{experience.archievement}</p>
                  </div>
                )}
                {experience.descriptions.map((description, i) => (
                  <p className="pt-3 text-customGrayHeavy dark:text-text" key={i}>
                    {description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
