import {
  faAward,
  faGraduationCap,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Keyboard } from "swiper"

import "swiper/css"
import "swiper/css/scrollbar"

const awards = [
  {
    name: "Scholarship",
    description:
      "Scholarship for students who have achieved academic excellence by maintaining a 3.5 cumulative GPA",
    organization: "University of Phayao",
    date: "2019 - 2022",
    type: "Scholarship",
    icon: faGraduationCap,
  },
  {
    name: "Outstanding Academic Performance Year 2019",
    description:
      "Award for students who have achieved academic excellence by maintaining a 10 cumulative A grades",
    organization: "University of Phayao",
    date: "2019",
    type: "",
    icon: faAward,
  },
  {
    name: "Good Academic Performance Year 2020",
    description:
      "Award for students who have achieved academic excellence by maintaining a level of 3.5 cumulative GPA in a single year.",
    organization: "University of Phayao",
    date: "2020",
    type: "Academic Achievement Awards",
    icon: faAward,
  },
  {
    name: "Good Academic Performance Year 2021",
    description:
      "Award for students who have achieved academic excellence by maintaining a level of 3.5 cumulative GPA in a single year.",
    organization: "University of Phayao",
    date: "2021",
    type: "Academic Achievement Awards",
    icon: faAward,
  },
  {
    name: "Outstanding Academic Performance Year 2021",
    description:
      "Award for students who have achieved academic excellence by maintaining a 10 cumulative A grades",
    organization: "University of Phayao",
    date: "2021",
    type: "",
    icon: faAward,
  },
  {
    name: "Hackathon Boot Camp",
    description: "2nd Place Award behalf of the Second Shop team",
    organization: "20Scoops CNX Co., Ltd.,",
    date: "2021",
    type: "",
    icon: faTrophy,
  },
]

export default function Awards() {
  return (
    <div className="h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold capitalize">Awards</p>
      <div className="h-full w-10/12 flex justify-center items-center">
        <Swiper
          slidesPerView={3}
          // initialSlide={1}
          centeredSlides={true}
          spaceBetween={100}
          speed={1200}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Keyboard]}
          className="h-full"
        >
          {awards.map((award, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[350px] w-full flex items-end">
                <div className="absolute h-12 w-12 top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-full shadow-md bg-primary">
                  <FontAwesomeIcon
                    icon={award.icon}
                    className="text-[#333333]"
                    size="lg"
                  />
                </div>
                <div className="h-[325px] w-full p-5 pt-10 space-y-5 text-center rounded-xl bg-customGrayHeavy">
                  <div className="h-[40%] flex flex-col items-center justify-between space-y-1">
                    <p className="text-xl font-bold">{award.name}</p>
                    <p>{award.organization}</p>
                    <p className="text-primary">{award.date}</p>
                  </div>
                  <div className="h-0.5 w-full bg-customGrayLight opacity-50"></div>
                  <p>{award.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
