import Webring from "@components/icons/Webring"
import {
  faDownload,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TypeAnimation } from "react-type-animation"
import SocialButton from "../hero/SocialButton"
import Facebook from "@components/icons/Facebook"
import GitHub from "@components/icons/GitHub"
import GitLab from "@components/icons/GitLab"
import TiltPhaseSix from "@components/TiltPhase"
import Linkedin from "@components/icons/Linkedin"

const highlights = [
  "Software Engineer",
  3000,
  "Fullstack Developer",
  3000,
  "Web Developer",
  3000,
]

const socials = [
  {
    url: "https://www.facebook.com/GongPawaret/",
    icon: <Facebook />,
  },
  {
    url: "https://www.linkedin.com/in/pawaret/",
    icon: <Linkedin />,
  },
  {
    url: "https://github.com/JerGun/",
    icon: <GitHub />,
  },
  {
    url: "https://gitlab.com/JerGun/",
    icon: <GitLab />,
  },
]

export default function Hero() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row-reverse md:h-screen transition-all duration-500 ease-in-out md:p-10">
      <div
        className="relative h-screen w-full flex flex-col items-center justify-center space-y-10 md:h-full"
        data-aos="zoom-in-left"
      >
        <div className="relative h-[40%] w-2/3 rounded-xl text-base transition duration-500 ease-in-out hover:scale-105 md:h-[55%">
          <TiltPhaseSix
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
          </TiltPhaseSix>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <p className="text-2xl font-bold">Pawaret Muengkaew</p>
          <p className="">April 18th, 2001</p>
          <p className="text-customGrayLight">@pawaret.dev</p>
          <div className="h-10 text-primary">
            <TypeAnimation
              cursor={false}
              sequence={highlights}
              speed={40}
              style={{ fontSize: "1.25rem" }}
              wrapper="p"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div
        className="h-full w-full flex flex-col items-center justify-center space-y-14 px-10 pb-10 md:pl-20"
        data-aos="zoom-in-right"
      >
        <div className="space-y-10">
          <div className="space-y-5">
            <div className="animate-bounce-five flex mb-5 text-3xl md:text-5xl">
              <p className="font-bold">Hi there</p>
              <p className="font-bold text-primary ">!</p>
            </div>
            <div className="flex md:space-x-5" data-aos="fade-up">
              <span className="h-0.5 w-10 mt-3 bg-white hidden md:block"></span>
              <p className="w-full">
                I'm a web developer from Thailand. I describe myself as a
                passionate developer who loves coding and always learning about
                new technologies.
              </p>
            </div>
            <div className="flex md:space-x-5" data-aos="fade-up">
              <span className="w-10 hidden md:block"></span>
              <p className="w-full">
                In my spare time I often listen to music, play games, watch
                anime or learn some new technologies.
              </p>
            </div>
          </div>
          <div
            className="w-full md:text-lg flex flex-col items-center"
            data-aos="fade-up"
          >
            <div className="flex space-x-2 flex-wrap">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p>Debugging becomes significantly easier</p>
            </div>
            <div className="flex space-x-2 flex-wrap">
              <p>if you first admit that you are the problem.</p>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center space-x-6 md:space-x-20">
          {socials.map((social, i) => (
            <SocialButton social={social} key={i} />
          ))}
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
      <a
        href="https://webring.wonderful.software#pawaret.dev"
        title="วงแหวนเว็บ"
        className="absolute top-10 right-10  hover:animate-spin hover:text-primary"
      >
        <Webring />
      </a>
    </div>
  )
}
