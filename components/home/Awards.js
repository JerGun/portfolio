import {
  faAward,
  faGraduationCap,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react"
import Lightbox from "react-awesome-lightbox"

import "swiper/css"
import "swiper/css/scrollbar"
import "react-awesome-lightbox/build/style.css"
import AwardSwiper from "@components/AwardSwiper"

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
      "Award for students who have achieved academic excellence by maintaining a 10 cumulative A grades in a single year.",
    organization: "University of Phayao",
    date: "2019, 2021",
    type: "",
    icon: faAward,
    // images: [
    //   {
    //     url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Hackathon.png?alt=media&token=f41f3ea6-57ae-4cbd-a5f5-e112513ca3ca",
    //     title: "Outstanding Academic Performance Year 2019",
    //   },
    //   {
    //     url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Hackathon.png?alt=media&token=f41f3ea6-57ae-4cbd-a5f5-e112513ca3ca",
    //     title: "Outstanding Academic Performance Year 2021",
    //   },
    // ],
  },
  {
    name: "Good Academic Performance",
    description:
      "Award for students who have achieved academic excellence by maintaining a level of 3.5 cumulative GPA in a single year.",
    organization: "University of Phayao",
    date: "2020 - 2021",
    type: "Academic Achievement Awards",
    icon: faAward,
    // images: [
    //   {
    //     url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Hackathon.png?alt=media&token=f41f3ea6-57ae-4cbd-a5f5-e112513ca3ca",
    //     title: "Good Academic Performance Year 2020",
    //   },
    //   {
    //     url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Hackathon.png?alt=media&token=f41f3ea6-57ae-4cbd-a5f5-e112513ca3ca",
    //     title: "Good Academic Performance Year 2021",
    //   },
    // ],
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
      <p className="text-4xl font-bold capitalize">Awards</p>
      <div className="h-full w-9/12 flex justify-center items-center md:hidden">
        <AwardSwiper
          slidePerView={1}
          awards={awards}
          setImageIndex={setImageIndex}
        />
      </div>
      <div className="h-full w-9/12 justify-center items-center hidden md:flex lg:hidden">
        <AwardSwiper
          slidePerView={2}
          awards={awards}
          setImageIndex={setImageIndex}
        />
      </div>
      <div className="h-full w-9/12 justify-center items-center hidden lg:flex">
        <AwardSwiper
          slidePerView={3}
          awards={awards}
          setImageIndex={setImageIndex}
        />
      </div>
      <div className="absolute">
        {awards.map((award, i) =>
          imageIndex == i ? (
            award.images?.length > 1 ? (
              <Lightbox
                images={award.images}
                onClose={() => {
                  setImageIndex(null)
                }}
                key={i}
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
      </div>
    </div>
  )
}
