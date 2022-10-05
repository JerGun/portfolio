import {
  faAward,
  faGraduationCap,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons"
import React from "react"

import "swiper/css"
import "swiper/css/scrollbar"

const certificates = [
  {
    name: "Scholarship",
    description:
      "Scholarship for students who have achieved academic excellence by maintaining a 3.5 cumulative GPA",
    organization: "University of Phayao",
    date: "2019 - 2022",
    type: "Scholarship",
    icon: faGraduationCap,
  },
  {
    name: "Outstanding Academic Performance",
    description:
      "Award for students who have achieved academic excellence by maintaining a 10 cumulative A grades",
    organization: "University of Phayao",
    date: "2019, 2021",
    type: "",
    icon: faAward,
  },
  {
    name: "Good Academic Performance",
    description:
      "Award for students who have achieved academic excellence by maintaining a level of 3.5 cumulative GPA in a single year.",
    organization: "University of Phayao",
    date: "2020 - 2021",
    type: "Academic Achievement Awards",
    icon: faAward,
  },
  {
    name: "Hackathon Boot Camp",
    description: "2nd Place Award behalf of the Second Shop team",
    organization: "20Scoops CNX Co., Ltd.,",
    date: "2021",
    type: "",
    icon: faTrophy,
  },
]

export default function Certificates() {
  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold capitalize">Certificates</p>
      <div className="h-full w-10/12 flex justify-center items-center"></div>
    </div>
  )
}
