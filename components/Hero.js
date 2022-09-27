import {
  faDownload,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import SocialButton from "./hero/SocialButton"
import TiltPhase from "./TiltPhase"

export default function Hero() {
  const [bios, setBios] = useState([])
  const [highlights, setHighlights] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await axios.get("/api/bio").then((res) => {
      let bios = []
      res.data.forEach((e) => {
        bios.push(e)
      })
      setBios(bios)
    })
    await axios.get("/api/highlight").then((res) => {
      let highlights = []
      res.data.forEach((e) => {
        highlights.push(e.title)
        highlights.push(3000)
      })
      setHighlights(highlights)
    })
    setIsLoading(false)
  }

  return (
    <div className="h-screen w-full flex p-10">
      <div className="h-full w-1/2 flex flex-col items-center space-y-14 py-14 pl-20">
        <div className="space-y-10">
          <div className="space-y-5">
            {bios.map((bio, i) => (
              <div key={i}>
                {bio.title == "Sentence 1" && (
                  <div className="animate-bounce-five flex mb-5">
                    <p className="text-5xl font-bold ">
                      {bio.description.substring(0, bio.description.length - 1)}
                    </p>
                    <p className="text-5xl font-bold text-primary ">
                      {bio.description.slice(-1)}
                    </p>
                  </div>
                )}
                <div className="flex space-x-5">
                  {bio.title == "Sentence 2" && (
                    <>
                      <span className="h-0.5 w-10 mt-3 bg-white"></span>
                      <p className="w-11/12">{bio.description}</p>
                    </>
                  )}
                  {bio.title == "Sentence 3" && (
                    <>
                      <span className="w-10"></span>
                      <p className="w-11/12">{bio.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full text-lg flex flex-col items-center">
            <div className="flex space-x-2">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p>Debugging becomes significantly easier</p>
            </div>
            <div className="flex space-x-2">
              <p>if you first admit that you are the problem.</p>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center space-x-20">
          <SocialButton name={"facebook"} />
          <SocialButton name={"github"} />
          <SocialButton name={"gitlab"} />
        </div>
        <a
          href="/resume.pdf"
          target={"_blank"}
          className="h-12 p-5 space-x-3 flex items-center justify-center rounded-xl font-bold group transition ease-in-out duration-500 text-black bg-primary hover:scale-110"
        >
          <p>Download Resume</p>
          <FontAwesomeIcon
            icon={faDownload}
            className="group-hover:animate-bounce"
          />
        </a>
        {/* <div class="relative flex h-12 w-1/3 justify-center items-center">
          <span class="absolute top-1 animate-ping-slow h-10 w-10 rounded-full transition ease-in-out duration-1000 bg-primary opacity-75 group-hover:animate-none"></span>
          <div class="relative rounded-full h-12 w-12 flex items-center justify-center group  transition-width ease-in-out duration-[1000ms] bg-primary text-black hover:w-full">
            <p className="whitespace-nowrap w-0 opacity-0 transition-width ease-in-out duration-[2000ms] group-hover:w-5/6 group-hover:pr-5 group-hover:opacity-100">
              Download Resume
            </p>
            <FontAwesomeIcon
              icon={faDownload}
              className="group-hover:animate-bounce"
            />
          </div>
        </div> */}
      </div>
      <div className="relative h-full w-1/2 flex flex-col items-center pt-10 space-y-10">
        <div className="relative h-[55%] w-1/2 rounded-xl text-base transition duration-500 ease-in-out hover:scale-105">
          <TiltPhase
            options={{
              max: 10,
              perspective: 800,
              scale: 1,
            }}
          >
            <img
              src="/images/pawaret.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </TiltPhase>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <p className="text-2xl font-bold">Pawaret Muengkaew</p>
          <p className="">April 18th, 2001</p>
          <p className="text-customGrayLight">@pawaret.dev</p>
          {!isLoading && (
            <TypeAnimation
              cursor={false}
              sequence={highlights}
              speed={40}
              style={{ fontSize: "1.25rem" }}
              wrapper="p"
              repeat={Infinity}
              className=" text-primary"
            />
          )}
        </div>
      </div>
    </div>
  )
}
