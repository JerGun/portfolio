import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faBriefcase,
  faEnvelope,
  faDownload,
  faLightbulb,
  faGraduationCap,
  faRocket,
  faAward,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import useOnScreen from "lib/useOnScreen"
import Scrollbar from "smooth-scrollbar"
import OptionButton from "./navbar/OptionButton"

export default function Navbar({
  opacity,
  heroRef,
  skillRef,
  workRef,
  experienceRef,
  rewardRef,
  educationRef,
  contactRef,
}) {
  const isSkillsVisible = useOnScreen(skillRef)
  const isWorkVisible = useOnScreen(workRef)
  const isContactVisible = useOnScreen(contactRef)

  const [isSkillHover, setIsSkillHover] = useState(false)
  const [isWorkHover, setIsWorkHover] = useState(false)
  const [isExperienceHover, setIsExperienceHover] = useState(false)
  const [isRewardHover, setIsRewardHover] = useState(false)
  const [iseducationHover, setIseducationHover] = useState(false)
  const [isContactHover, setIsContactHover] = useState(false)

  const [data, setData] = useState({
    resume:
      "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/resume.pdf?alt=media&token=50faa427-9145-4bca-b389-f8bf69361647",
  })

  const executeScroll = (ref) => {
    const yOffset = -60
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })
    // ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`sticky top-0 z-50 h-16 w-full shadow-lg bg-white`}
      style={{ opacity: `${opacity}%` }}
    >
      <div className="h-full w-full flex justify-between pl-10 bg-background ">
        <button
          className="flex items-center space-x-3"
          onClick={() => executeScroll(heroRef)}
        >
          <img src="../images/logo.png" alt="" className="h-10 w-10" />
          <div className="flex text-2xl">
            <p className="uppercase font-oswald font-bold">Pawaret</p>
            <p className="uppercase font-oswald font-bold text-customGrayLight">
              .
            </p>
            <p className="uppercase font-oswald font-bold text-primary">dev</p>
          </div>
        </button>
        <div className="h-full flex capitalize">
          <OptionButton
            name={"Skills"}
            icon={faLightbulb}
            onClick={() => executeScroll(skillRef)}
            onMouseEnter={() => setIsSkillHover(true)}
            onMouseLeave={() => setIsSkillHover(false)}
            condition={isSkillsVisible | isSkillHover}
          />
          <OptionButton
            name={"Work"}
            icon={faBriefcase}
            onClick={() => executeScroll(workRef)}
            onMouseEnter={() => setIsWorkHover(true)}
            onMouseLeave={() => setIsWorkHover(false)}
            condition={(!isSkillsVisible && isWorkVisible) | isWorkHover}
          />
          <OptionButton
            width={"90px"}
            name={"Experience"}
            icon={faRocket}
            onClick={() => executeScroll(experienceRef)}
            onMouseEnter={() => setIsExperienceHover(true)}
            onMouseLeave={() => setIsExperienceHover(false)}
            condition={(!isSkillsVisible && isWorkVisible) | isExperienceHover}
          />
          <OptionButton
            width={"60px"}
            name={"Reward"}
            icon={faAward}
            onClick={() => executeScroll(rewardRef)}
            onMouseEnter={() => setIsRewardHover(true)}
            onMouseLeave={() => setIsRewardHover(false)}
            condition={(!isSkillsVisible && isWorkVisible) | isRewardHover}
          />
          <OptionButton
            width={"60px"}
            name={"Education"}
            icon={faGraduationCap}
            onClick={() => executeScroll(rewardRef)}
            onMouseEnter={() => setIsRewardHover(true)}
            onMouseLeave={() => setIsRewardHover(false)}
            condition={(!isSkillsVisible && isWorkVisible) | isRewardHover}
          />
          <OptionButton
            name={"Contact"}
            icon={faEnvelope}
            onClick={() => executeScroll(educationRef)}
            onMouseEnter={() => setIsContactHover(true)}
            onMouseLeave={() => setIsContactHover(false)}
            condition={(!isSkillsVisible && isWorkVisible) | isContactHover}
          />
        </div>
        <a
          href="/resume.pdf"
          rel="noreferrer"
          target="_blank"
          className="h-full flex items-center justify-center px-5 space-x-3"
        >
          <p>Download Resume</p>
          <FontAwesomeIcon icon={faDownload} className="animate-bounce" />
        </a>
      </div>
    </div>
  )
}

{
  /* <button
  onClick={() => executeScroll(resumeRef)}
  className={`${
    isSkillsVisible ? "text-primary" : "text-text"
  } h-full flex items-center justify-center px-5 space-x-3 transition ease-in-out duration-300 hover:scale-110 hover:text-primary`}
>
  <FontAwesomeIcon icon={faLightbulb} />
  <p>Skills</p>
</button> */
}
{
  /* <button
  onClick={() => executeScroll(skillRef)}
  onMouseEnter={() => setIsSkillHover(true)}
  onMouseLeave={() => setIsSkillHover(false)}
  className="flex items-center space-x-3 px-5 transition-all ease-in-out hover:scale-110"
  style={{
    transition: "all 500ms",
    transitionTimingFunction: "ease-in-out",
    color: isSkillsVisible | isSkillHover ? "#FFC400" : "#fff",
  }}
>
  <FontAwesomeIcon icon={faLightbulb} />
  <p
    style={{
      width: isSkillsVisible | isSkillHover ? "40px" : "0px",
      opacity: isSkillsVisible | isSkillHover ? "1" : "0",
      color: isSkillsVisible | isSkillHover ? "#FFC400" : "#fff",
      transition: "all 500ms",
      transitionTimingFunction: "ease-in-out",
    }}
  >
    Skills
  </p>
</button> */
}
