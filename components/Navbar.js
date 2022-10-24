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
  faCertificate,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import useOnScreen from "lib/useOnScreen"
import Scrollbar from "smooth-scrollbar"
import OptionButton from "./navbar/OptionButton"
import Bright from "./icons/Bright"

export default function Navbar({
  opacity,
  heroRef,
  skillRef,
  workRef,
  experienceRef,
  awardRef,
  certificateRef,
  educationRef,
  contactRef,
  darkMode,
  setDarkMode,
}) {
  const isSkillsVisible = useOnScreen(skillRef)
  const isWorkVisible = useOnScreen(workRef)
  const isExperienceVisible = useOnScreen(experienceRef)
  const isAwardVisible = useOnScreen(awardRef)
  const isCertificateVisible = useOnScreen(certificateRef)
  const isEducationVisible = useOnScreen(educationRef)
  const isContactVisible = useOnScreen(contactRef)

  const [isSkillHover, setIsSkillHover] = useState(false)
  const [isWorkHover, setIsWorkHover] = useState(false)
  const [isExperienceHover, setIsExperienceHover] = useState(false)
  const [isAwardHover, setIsAwardHover] = useState(false)
  const [isCertificateHover, setIsCertificateHover] = useState(false)
  const [isEducationHover, setIsEducationHover] = useState(false)
  const [isContactHover, setIsContactHover] = useState(false)

  const [data, setData] = useState({
    resume:
      "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/resume.pdf?alt=media&token=50faa427-9145-4bca-b389-f8bf69361647",
  })

  const executeScroll = (ref) => {
    const yOffset = -45
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })
    // ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className="sticky top-0 z-50 h-16 w-full shadow-lg bg-white hidden lg:block text-white"
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
            width={"30px"}
            name={"Skills"}
            icon={faLightbulb}
            onClick={() => executeScroll(skillRef)}
            onMouseEnter={() => setIsSkillHover(true)}
            onMouseLeave={() => setIsSkillHover(false)}
            condition={isSkillsVisible | isSkillHover}
          />
          <OptionButton
            width={"30px"}
            name={"Works"}
            icon={faBriefcase}
            onClick={() => executeScroll(workRef)}
            onMouseEnter={() => setIsWorkHover(true)}
            onMouseLeave={() => setIsWorkHover(false)}
            condition={(!isSkillsVisible && isWorkVisible) | isWorkHover}
          />
          <OptionButton
            width={"80px"}
            name={"Experiences"}
            icon={faRocket}
            onClick={() => executeScroll(experienceRef)}
            onMouseEnter={() => setIsExperienceHover(true)}
            onMouseLeave={() => setIsExperienceHover(false)}
            condition={
              (!isSkillsVisible && !isWorkVisible && isExperienceVisible) |
              isExperienceHover
            }
          />
          <OptionButton
            width={"50px"}
            name={"Awards"}
            icon={faAward}
            onClick={() => executeScroll(awardRef)}
            onMouseEnter={() => setIsAwardHover(true)}
            onMouseLeave={() => setIsAwardHover(false)}
            condition={
              (!isSkillsVisible &&
                !isWorkVisible &&
                !isExperienceVisible &&
                isAwardVisible) | isAwardHover
            }
          />
          <OptionButton
            width={"80px"}
            name={"Certificates"}
            icon={faCertificate}
            onClick={() => executeScroll(certificateRef)}
            onMouseEnter={() => setIsCertificateHover(true)}
            onMouseLeave={() => setIsCertificateHover(false)}
            condition={
              (!isSkillsVisible &&
                !isWorkVisible &&
                !isExperienceVisible &&
                !isAwardVisible &&
                isCertificateVisible) | isCertificateHover
            }
          />
          <OptionButton
            width={"70px"}
            name={"Education"}
            icon={faGraduationCap}
            onClick={() => executeScroll(educationRef)}
            onMouseEnter={() => setIsEducationHover(true)}
            onMouseLeave={() => setIsEducationHover(false)}
            condition={
              (!isSkillsVisible &&
                !isWorkVisible &&
                !isExperienceVisible &&
                !isAwardVisible &&
                !isCertificateVisible &&
                isEducationVisible) | isEducationHover
            }
          />
          <OptionButton
            name={"Contact"}
            icon={faEnvelope}
            onClick={() => executeScroll(contactRef)}
            onMouseEnter={() => setIsContactHover(true)}
            onMouseLeave={() => setIsContactHover(false)}
            condition={
              (!isSkillsVisible &&
                !isWorkVisible &&
                !isExperienceVisible &&
                !isAwardVisible &&
                !isCertificateVisible &&
                !isEducationVisible &&
                isContactVisible) | isContactHover
            }
          />
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-6 transition duration-300 ease-in-out hover:scale-125 hover:text-primary"
          >
            {darkMode ? <FontAwesomeIcon icon={faMoon} /> : <Bright />}
          </button>
          <a
            href="/resume.pdf"
            rel="noreferrer"
            target="_blank"
            className="h-full flex items-center justify-center px-5 space-x-3 transition duration-300 ease-in-out hover:text-primary"
          >
            <p>Download Resume</p>
            <FontAwesomeIcon icon={faDownload} className="animate-bounce" />
          </a>
        </div>
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
