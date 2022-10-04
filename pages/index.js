import Navbar from "@components/Navbar"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import Footer from "@components/Footer"
import Hero from "@components/Hero"
import Works from "@components/home/Works"
import Skills from "@components/home/Skills"
import Experiences from "@components/home/Experiences"
import Awards from "@components/home/Awards"
import Education from "@components/home/Education"
import Contact from "@components/home/Contact"
// import SmoothScroll from "@components/SmoothScroll"

export default function Home() {
  const heroRef = useRef(null)
  const skillRef = useRef(null)
  const workRef = useRef(null)
  const experienceRef = useRef(null)
  const awardRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const maxHeight = document.documentElement.clientHeight
    setScrollY(Math.round((Math.floor(window.scrollY) / maxHeight) * 100))
  }

  return (
    <div className="h-full w-full bg-background bg-opacity-90">
      <Head>
        <title>Pawaret Muengkaew | Portfolio</title>
        <meta name="description" content="pawaret.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full">
        <div ref={heroRef}>
          <Hero />
        </div>
        <div className="relative">
          <Navbar
            opacity={scrollY}
            heroRef={heroRef}
            skillRef={skillRef}
            workRef={workRef}
            experienceRef={experienceRef}
            awardRef={awardRef}
            educationRef={educationRef}
            contactRef={contactRef}
          />
          <div ref={skillRef} className="h-full w-full">
            <Skills />
          </div>
          <div id="work" ref={workRef} className="h-full w-full">
            <Works />
          </div>
          <div ref={experienceRef} className="h-full w-full">
            <Experiences />
          </div>
          <div ref={awardRef} className="h-full w-full">
            <Awards />
          </div>
          <div ref={educationRef} className="h-full w-full">
            <Education />
          </div>
          <div ref={contactRef} className="h-full w-full">
            <Contact />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
