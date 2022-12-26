import Footer from "@components/Footer"
import Awards from "@components/home/Awards"
import Certificates from "@components/home/Certificates"
import Contact from "@components/home/Contact"
import Education from "@components/home/Education"
import Experiences from "@components/home/Experiences"
import Hero from "@components/home/Hero"
import Skills from "@components/home/Skills"
import Works from "@components/home/Works"
import Navbar from "@components/Navbar"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Head from "next/head"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const heroRef = useRef(null)
  const skillRef = useRef(null)
  const workRef = useRef(null)
  const experienceRef = useRef(null)
  const awardRef = useRef(null)
  const certificateRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)

  const [scrollY, setScrollY] = useState(0)
  const [darkMode, setDarkMode] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

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

    if (window.pageYOffset > heroRef.current.clientHeight) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className={`${darkMode && "dark"} relative h-full w-full`}>
      <Head>
        <title>Pawaret Muengkaew | Portfolio</title>
        <meta
          name="description"
          content="Pawaret Muengkaew personal portfolio website made with 💖 using Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        type="button"
        onClick={scrollToTop}
        className={`
        ${isVisible ? "block" : "hidden"} 
        fixed right-[10%] lg:right-[3%] bottom-[3%] lg:bottom-[5%] h-12 w-12 z-40 animate-bounce bg-customGrayHeavy hover:bg-primary text-primary hover:text-customGrayHeavy transition duration-300 ease-in-out items-center rounded-full p-3 shadow-sm`}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <div className="h-full w-full bg-white dark:bg-opacity-90 dark:bg-background text-black dark:text-white">
        <section ref={heroRef}>
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        </section>
        <div className="relative">
          <Navbar
            opacity={scrollY}
            heroRef={heroRef}
            skillRef={skillRef}
            workRef={workRef}
            experienceRef={experienceRef}
            awardRef={awardRef}
            certificateRef={certificateRef}
            educationRef={educationRef}
            contactRef={contactRef}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <section ref={skillRef} className="h-full w-full">
            <Skills />
          </section>
          <section ref={workRef} className="h-full w-full">
            <Works />
          </section>
          <section ref={experienceRef} className="h-full w-full">
            <Experiences />
          </section>
          <section ref={educationRef} className="h-full w-full">
            <Education />
          </section>
          <section ref={awardRef} className="h-full w-full">
            <Awards awardRef={awardRef} />
          </section>
          <section ref={certificateRef} className="h-full w-full">
            <Certificates />
          </section>
          <section ref={contactRef} className="h-full w-full">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </div>
  )
}
