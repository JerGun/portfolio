import { faTrophy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

const educations = [
  {
    school: "University of Phayao",
    archievement: "First class honours",
    degree: "Bachelor of Engineering in Software Engineering",
    grade:"GPAX 3.71",
    date: "2019 - 2022",
    project:
      "Senior Project I (Ticketplace) : Ticket decentralized exchange website using React.js, Solidity and Blockchain technology",
    projectSecond:
      "Senior Project II (Archery Adventure) : Wave-based & third-person shooter game using Unity and C#",
  },
  {
    school: "Chiang Rai Vidhayakhome School",
    degree: "Science and Mathematics",
    grade:"GPAX 3.66",
    date: "2009 - 2019",
  },
]

export default function Education() {
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
      <p className="text-4xl font-bold capitalize">Education</p>
      <div className="w-9/12 flex flex-col justify-center space-y-12">
        {educations.map((education, i) => (
          <div
            className="h-fit w-full space-y-12"
            key={i}
            data-aos="fade-right"
          >
            <div className="h-fit w-full space-y-5">
              <p className="text-primary">{education.date}</p>
              {education.archievement && (
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faTrophy} className="text-primary" />
                  <p className="text-xl">{education.archievement}</p>
                </div>
              )}
              <p className="text-3xl font-bold">{education.degree}</p>
              <p className="text-xl font-bold">{education.school}</p>
              <p className="">{education.grade}</p>
              <p className="text-customGrayHeavy dark:text-text">
                {education.project}
              </p>
              <p className="text-customGrayHeavy dark:text-text">
                {education.projectSecond}
              </p>
            </div>
            {i % 2 == 0 && (
              <div className="h-0.5 w-full bg-customGrayLight opacity-50"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
