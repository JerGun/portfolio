import {
  faCheck,
  faTrophy,
  faUserGraduate,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const experiences = [
  {
    title: "Backend Developer",
    icon: faUserTie,
    archievement: "Employee",
    description: "",
    company: "OneDee Solution Co., Ltd.,",
    date: "Oct 2022 - Present",
  },
  {
    title: "Fullstack Developer",
    icon: faUserGraduate,
    archievement: "Internship",
    description: "",
    company: "OneDee Solution Co., Ltd.,",
    date: "Apr 2022 - Sep 2022",
  },
  {
    title: "Backend Developer",
    icon: faUserGraduate,
    archievement: "Internship",
    description: "",
    company: "OneDee Solution Co., Ltd.,",
    date: "Apr 2021 - May 2021",
  },
  {
    title: "Entrepreneurial Ecosystem Development",
    icon: faCheck,
    archievement: "Attend",
    description:
      "Attend on behalf of the Nixing team, the topic was: Food Order Application, where each meal was allocated by a nutritionist. ",
    company: "Innovation and Technology Transfer Institute (UPITI)",
    date: "Mar 2021",
  },
  {
    title: "Hackathon Boot Camp",
    icon: faTrophy,
    archievement: "2nd Place Award (Second Shop)",
    description:
      "There are activities to enhance the thinking process in the Software Development Process.",
    company: "20Scoops CNX Co., Ltd.,",
    date: "Mar 2021",
  },
  {
    title: "TPA'S PARTNER",
    icon: faTrophy,
    archievement: "Top 10 finalists",
    description:
      "TPA's Partner is a project to find students to work with the Thai Programming Association in organizing various activities for students.",
    company: "Thai Programming Association",
    date: "Jan 2021",
  },
]

export default function Experiences() {
  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold capitalize">Experiences</p>
      <div className="w-9/12">
        {experiences.map((experience, i) => (
          <div className="h-fit w-full flex" key={i}>
            <div className="h-full w-5/12 space-y-3 px-10">
              <p className="text-xl font-bold">{experience.company}</p>
              <p className="text-text">{experience.date}</p>
            </div>
            <div className="h-full w-7/12 flex">
              <div className="h-full w-fit">
                <div className="relative h-10 w-10 flex flex-col items-center justify-center">
                  <span className="absolute h-10 w-10 rounded-full border-2 border-dashed"></span>
                  <span className="h-5 w-5 rounded-full bg-primary"></span>
                </div>
                <div className="h-full w-10 flex items-center justify-center">
                  <div className="h-40 w-0 border-[0.1px] border-dashed"></div>
                </div>
              </div>
              <div className="w-11/12 px-10 py-1.5 space-y-3">
                <p className="text-xl font-bold">{experience.title}</p>
                {experience.archievement && (
                  <div className="flex items-center space-x-3">
                    <FontAwesomeIcon
                      icon={experience.icon}
                      className="text-primary"
                    />
                    <p>{experience.archievement}</p>
                  </div>
                )}
                <p className="text-text">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
