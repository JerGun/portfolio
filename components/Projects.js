import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

export default function Projects({ title, projects, active }) {
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
    <div className="w-full space-y-10">
      <div className="space-y-5">
        <div className="flex space-x-5 items-center">
          <p className="text-xl font-bold capitalize md:text-3xl">{title}</p>
          <span className="h-0.5 w-10 bg-white"></span>
        </div>
        <div className="flex flex-wrap space-x-1">
          <p>
            All small gallery of recent projects chosen by me. Interested to see
            some more? Visit
          </p>
          <a
            href="https://github.com/JerGun?tab=repositories"
            target="_blank"
            className="font-bold text-primary"
          >
            my work
          </a>
          <p>page.</p>
        </div>
      </div>
      <div className="h-full w-full space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div data-aos="zoom-in-up" key={i}>
            <div className="h-full rounded-xl flex flex-col justify-between border border-customGrayHeavy bg-customGrayHeavy transition duration-500 ease-in-out hover:scale-105">
              <div className="flex flex-col">
                <div className="relative h-[200px] w-full rounded-t-xl lg:h-[300px]">
                  <img
                    src={project.img}
                    alt={project.name}
                    className={`absolute h-full w-full z-10 rounded-t-xl ${
                      project.style
                        ? project.style
                        : "object-cover object-center"
                    }`}
                  />
                  {project.mobile && (
                    <div className="absolute h-full w-full z-0 top-0 py-12">
                      <img
                        src={project.img}
                        alt={project.name}
                        className="h-full w-full rounded-t-xl object-cover blur scale-125"
                      />
                    </div>
                  )}
                </div>
                <div className="h-fit p-5 space-y-3">
                  <div className="flex items-center justify-between space-x-3">
                    <p className="text-lg font-bold text-primary">
                      {project.name}
                    </p>
                    {/* <span class="relative flex h-3 w-3">
                  <span
                    class={`${
                      project.active ? "bg-green-400" : "bg-red-400"
                    } animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
                  ></span>
                  <span
                    class={`${
                      project.active ? "bg-green-500" : "bg-red-500"
                    } relative inline-flex rounded-full h-3 w-3`}
                  ></span>
                </span> */}
                    <p className="capitalize text-sm text-customGrayLight">
                      {project.date}
                    </p>
                  </div>
                  <p className="text-sm md:text-base">{project.description}</p>
                  <div className="w-full flex flex-col items-center space-y-3">
                    <p className="text-primary">Technologies</p>
                    <div className="w-full flex flex-wrap">
                      {project.tech.map((tech, i) => (
                        <div className="flex text-sm md:text-base" key={i}>
                          <p className={`${i % 2 != 0 && "text-text"}`}>
                            {tech}
                          </p>
                          <span className="w-5"></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex px-5 pb-5 justify-between">
                <div className="flex items-center space-x-3">
                  {/* <span class="relative flex h-3 w-3">
                  <span
                    class={`${
                      project.active ? "bg-green-400" : "bg-red-400"
                    } animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`}
                  ></span>
                  <span
                    class={`${
                      project.active ? "bg-green-500" : "bg-red-500"
                    } relative inline-flex rounded-full h-3 w-3`}
                  ></span>
                </span> */}
                  <p
                    className={`${
                      project.status == "active"
                        ? "text-green-400"
                        : "text-customGrayLight"
                    } capitalize text-sm `}
                  >
                    {project.status}
                  </p>
                </div>
                <div className="flex space-x-5">
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      className="p-3 transition duration-300 ease-in-out hover:scale-125 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faCode}
                        // className="text-primary"
                      />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="p-3 transition duration-300 ease-in-out hover:scale-125 hover:text-primary"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        // className="text-primary"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
