import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTerminal, faCode } from "@fortawesome/free-solid-svg-icons"
import SkillItem from "./SkillItem"

export default function DevSkills({ title, skills }) {
  return (
    <div className="h-full w-full flex flex-col col-span-2 items-center space-y-10">
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
          <div className="w-full flex flex-col items-center space-y-10" key={i}>
            <p className="text-primary capitalize">{skill.header}</p>
            <div
              className={`w-full grid grid-cols-3 grid-rows-${
                Math.round(skill.items.length / 3) + 1
              } gap-y-10 place-items-center`}
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
