import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUser,
  faBriefcase,
  faEnvelope,
  faDownload,
} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [data, setData] = useState({
    resume:
      "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/resume.pdf?alt=media&token=50faa427-9145-4bca-b389-f8bf69361647",
  })

  return (
    <div className="sticky h-16 w-full flex justify-between pl-20 bg-background opacity-90">
      <div className="flex items-center text-2xl">
        <p className="uppercase font-oswald font-bold">Pawaret</p>
        <p className="uppercase font-oswald font-bold text-gray-300">.</p>
        <p className="uppercase font-oswald font-bold text-primary">dev</p>
      </div>
      <div className="h-full flex capitalize">
        <a
          href=""
          className="h-full flex items-center justify-center px-5 space-x-3"
        >
          <FontAwesomeIcon icon={faUser} />
          <p>Resume</p>
        </a>
        <a
          href=""
          className="h-full flex items-center justify-center px-5 space-x-3"
        >
          <FontAwesomeIcon icon={faBriefcase} />
          <p>Work</p>
        </a>
        <a
          href=""
          className="h-full flex items-center justify-center px-5 space-x-3"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <p>Contact</p>
        </a>
      </div>
      <a
        href={data.resume}
        target="_blank"
        className="h-full flex items-center justify-center px-5 space-x-3"
      >
        <p>Download Resume</p>
        <FontAwesomeIcon icon={faDownload} className="animate-bounce" />
      </a>
    </div>
  )
}
