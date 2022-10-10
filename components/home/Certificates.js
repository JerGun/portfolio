import CertificateSwiper from "@components/CertificateSwiper"
import React, { useState } from "react"
import Lightbox from "react-awesome-lightbox"

import "react-awesome-lightbox/build/style.css"

const certificates = [
  {
    title: "IC3 Certificate",
    url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/IC3.png?alt=media&token=b0b0ad1f-ce19-40e1-8b5b-71fdc61ef7cf",
  },
  {
    title: "TOCPC Certificate",
    url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/TOCPC.jpeg?alt=media&token=d4e0c262-7e06-4e82-b9ed-7f7cc4f6f8a2",
  },
  {
    title: "Web Design Certificate",
    url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Web%20Design.jpg?alt=media&token=3b037f68-985e-462b-999a-a26b08d46aa2",
  },
  {
    title: "Web Application Development Certificate",
    url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Web%20Application.jpg?alt=media&token=32c3b352-a35d-44c0-a4d6-f9104739c9d6",
  },
  {
    title: "Python Programming Certificate",
    url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Python%20Programming.jpg?alt=media&token=f62e1888-e635-43a3-bcd2-3cd6591adcc3",
  },
  {
    title: "Back-end Developing Certificate",
    url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Backend.jpg?alt=media&token=3a4c3ccf-992e-45b1-9c78-51b5b0288425",
  },
  {
    title: "Mobile Application Design Certificate",
    url: "https://firebasestorage.googleapis.com/v0/b/pawaret-portfolio.appspot.com/o/Mobile%20Application%20Design.jpg?alt=media&token=33ec5a81-7b26-4afe-8b0e-ad296eae64d0",
  },
]

export default function Certificates() {
  const [imageIndex, setImageIndex] = useState(null)

  return (
    <div className="relative h-full w-full flex flex-col items-center py-20 space-y-16">
      <p className="text-4xl font-bold capitalize">Certificates</p>
      {/* <div className="h-full w-9/12 grid grid-cols-1 gap-y-10 items-center md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, i) => (
          <div className="h-full w-full flex justify-center" key={i}>
            <button
              className="w-2/3 flex flex-col items-center space-y-3"
              onClick={() => {
                setImageIndex(i)
              }}
            >
              <img
                src={certificate.url}
                alt={certificate.title}
                className="rounded-xl "
              />
              <p className="text-lg">{certificate.title}</p>
            </button>
          </div>
        ))}
      </div> */}
      <div className="h-full w-9/12">
        <CertificateSwiper
          slidePerView={1}
          certificates={certificates}
          setImageIndex={setImageIndex}
        />
      </div>
      {imageIndex != null && (
        <div className="absolute">
          <Lightbox
            title={certificates[imageIndex].title}
            image={certificates[imageIndex].url}
            onClose={() => {
              setImageIndex(null)
            }}
          />
        </div>
      )}
    </div>
  )
}
