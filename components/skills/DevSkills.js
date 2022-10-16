import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTerminal, faCode } from "@fortawesome/free-solid-svg-icons"
import SkillItem from "./SkillItem"
import { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

export default function DevSkills({ title, skills }) {
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
    <div
      className="h-full w-full flex flex-col items-center space-y-10"
      data-aos={`${title == "Backend Dev" ? "fade-right" : "fade-left"}`}
    >
      <div className="flex flex-col items-center space-y-5">
        <FontAwesomeIcon
          icon={title == "Backend Dev" ? faTerminal : faCode}
          size="2x"
          className="text-primary"
        />
        <p className="text-xl font-bold">{title}</p>
      </div>
      <div className="w-4/5 flex flex-col items-center space-y-10">
        {skills.map((skill, i) => (
          <div className="w-full flex flex-col items-center space-y-10" key={i} data-aos="zoom-in-up">
            <p className="text-primary capitalize">{skill.header}</p>
            <div
              className={`w-full grid grid-cols-2 grid-rows-${
                Math.round(skill.items.length / 3) + 1
              } gap-y-10 place-items-center md:grid-cols-3`}
            >
              {skill.items.map((item, j) => (
                <SkillItem icon={item.icon} name={item.name} key={j} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
