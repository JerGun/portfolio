import {
  faAward,
  faGraduationCap,
  faImage,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Keyboard } from "swiper"
import Lightbox from "react-awesome-lightbox"

import "swiper/css"
import "swiper/css/scrollbar"
import "react-awesome-lightbox/build/style.css"

const awards = [
  {
    name: "Scholarship",
    description:
      "Scholarship for students who have achieved academic excellence by maintaining a 3.5 cumulative GPAX",
    organization: "University of Phayao",
    date: "2019 - 2022",
    type: "Scholarship",
    icon: faGraduationCap,
  },
  {
    name: "Outstanding Academic Performance",
    description:
      "Award for students who have achieved academic excellence by maintaining a 10 cumulative A grades",
    organization: "University of Phayao",
    date: "2019, 2021",
    type: "",
    icon: faAward,
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Hackathon.png?alt=media&token=f41f3ea6-57ae-4cbd-a5f5-e112513ca3ca",
        title: "Outstanding Academic Performance Year 2019",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Hackathon.png?alt=media&token=f41f3ea6-57ae-4cbd-a5f5-e112513ca3ca",
        title: "Outstanding Academic Performance Year 2021",
      },
    ],
  },
  {
    name: "Good Academic Performance",
    description:
      "Award for students who have achieved academic excellence by maintaining a level of 3.5 cumulative GPA in a single year.",
    organization: "University of Phayao",
    date: "2020 - 2021",
    type: "Academic Achievement Awards",
    icon: faAward,
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Hackathon.png?alt=media&token=f41f3ea6-57ae-4cbd-a5f5-e112513ca3ca",
        title: "Good Academic Performance Year 2020",
      },
      {
        url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Hackathon.png?alt=media&token=f41f3ea6-57ae-4cbd-a5f5-e112513ca3ca",
        title: "Good Academic Performance Year 2021",
      },
    ],
  },
  {
    name: "Hackathon Boot Camp",
    description: "2nd Place Award behalf of the Second Shop team",
    organization: "20Scoops CNX Co., Ltd.,",
    date: "2021",
    type: "",
    icon: faTrophy,
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Hackathon.png?alt=media&token=f41f3ea6-57ae-4cbd-a5f5-e112513ca3ca",
        title: "Hackathon Boot Camp",
      },
    ],
  },
]

export default function Awards() {
  const [imageIndex, setImageIndex] = useState(null)

  return (
    <div className="relative h-full w-full flex flex-col items-center py-20 space-y-16">
      {awards.map((award, i) =>
        imageIndex == i ? (
          award.images?.length > 1 ? (
            <Lightbox
              images={award.images}
              onClose={() => {
                setImageIndex(null)
              }}
              key={i}
              className="absolute"
            />
          ) : (
            award.images.map((image, j) => (
              <Lightbox
                title={image.title}
                image={image.url}
                onClose={() => {
                  setImageIndex(null)
                }}
                key={j}
              />
            ))
          )
        ) : null
      )}
      <p className="text-4xl font-bold capitalize">Awards</p>
      <div className="h-full w-10/12 flex justify-center items-center">
        <Swiper
          slidesPerView={3}
          // initialSlide={1}
          // grabCursor={true}
          centeredSlides={true}
          spaceBetween={100}
          speed={1200}
          keyboard={{
            enabled: true,
          }}
          // autoplay={{
          //   delay: 4000,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay, Keyboard]}
          className="h-full"
        >
          {awards.map((award, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[375px] w-full flex items-end">
                <div className="absolute h-12 w-12 top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-full shadow-md bg-primary">
                  <FontAwesomeIcon
                    icon={award.icon}
                    className="text-[#333333]"
                    size="lg"
                  />
                </div>
                <div className="h-[350px] w-full p-5 pt-10 space-y-5 text-center rounded-xl bg-customGrayHeavy">
                  <div className="h-[50%] flex flex-col items-center space-y-3">
                    <p className="text-xl font-bold">{award.name}</p>
                    <p>{award.organization}</p>
                    <p className="text-primary">{award.date}</p>
                    {award.images && (
                      <div className="w-full flex justify-center">
                        <button
                          onClick={() => {
                            setImageIndex(i)
                          }}
                          className=""
                        >
                          <FontAwesomeIcon
                            icon={faImage}
                            className=""
                            size="lg"
                          />
                        </button>
                      </div>
                    )}
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
