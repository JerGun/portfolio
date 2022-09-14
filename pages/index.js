import Navbar from "@components/Navbar"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import Footer from "@components/Footer"
import Hero from "@components/Hero"
import Skills from "@components/Skills"
import Work from "@components/Work"
// import SmoothScroll from "@components/SmoothScroll"

export default function Home() {
  const heroRef = useRef(null)
  const skillRef = useRef(null)
  const workRef = useRef(null)
  const experienceRef = useRef(null)
  const rewardRef = useRef(null)
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
            rewardRef={rewardRef}
            educationRef={educationRef}
            contactRef={contactRef}
          />
          <div ref={skillRef} className="h-full w-full">
            <Skills />
          </div>
          <div id="work" ref={workRef} className="h-screen w-full">
            <Work />
          </div>
          <div ref={experienceRef} className="h-screen w-full">
            <Hero />
          </div>
          <div ref={rewardRef} className="h-screen w-full">
            <Hero />
          </div>
          <div ref={educationRef} className="h-screen w-full">
            <Hero />
          </div>
          <div ref={contactRef} className="h-screen w-full">
            <Hero />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
