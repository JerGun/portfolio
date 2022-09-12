import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faBriefcase,
  faEnvelope,
  faDownload,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import useOnScreen from "lib/useOnScreen"
import Scrollbar from "smooth-scrollbar"

export default function Navbar({ opacity, resumeRef, workRef, contactRef }) {
  const isSkillsVisible = useOnScreen(resumeRef)
  const isWorkVisible = useOnScreen(workRef)
  const isContactVisible = useOnScreen(contactRef)

  const [data, setData] = useState({
    resume:
      "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/resume.pdf?alt=media&token=50faa427-9145-4bca-b389-f8bf69361647",
  })

  const executeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`sticky top-0 z-50 h-16 w-full shadow-lg bg-white`}
      style={{ opacity: `${opacity}%` }}
    >
      <div className="h-full w-full flex justify-between pl-20 bg-background ">
        <div className="flex items-center text-2xl">
          <p className="uppercase font-oswald font-bold">Pawaret</p>
          <p className="uppercase font-oswald font-bold text-customGrayLight">
            .
          </p>
          <p className="uppercase font-oswald font-bold text-primary">dev</p>
        </div>
        <div className="h-full flex capitalize">
          <button
            onClick={() => executeScroll(resumeRef)}
            className={`${
              isSkillsVisible ? "text-primary" : ""
            } h-full flex items-center justify-center px-5 space-x-3`}
          >
            <FontAwesomeIcon icon={faLightbulb} />
            <p>Skills</p>
          </button>
          <button
            onClick={() => executeScroll(workRef)}
            className={`${
              !isSkillsVisible && isWorkVisible ? "text-primary" : ""
            } h-full flex items-center justify-center px-5 space-x-3`}
          >
            <FontAwesomeIcon icon={faBriefcase} />
            <p>Work</p>
          </button>
          <button
            onClick={() => executeScroll(contactRef)}
            className={`${
              !isSkillsVisible && !isWorkVisible && contactRef
                ? "text-primary"
                : ""
            } h-full flex items-center justify-center px-5 space-x-3`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <p>Contact</p>
          </button>
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
