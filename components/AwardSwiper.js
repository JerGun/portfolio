import { faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useOnScreen from "@lib/useOnScreen"
import { useEffect, useRef } from "react"
import SwiperCore, { Autoplay, Keyboard } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function AwardSwiper({
  slidePerView,
  awards,
  setImageIndex,
  awardRef,
}) {
  const swiperRef = useRef(null)

  const isAwardVisible = useOnScreen(awardRef)

  const onInit = (SwiperCore) => {
    swiperRef.current = SwiperCore
  }

  useEffect(() => {
    handleSwiperAutoPlay()
  }, [isAwardVisible])

  const handleSwiperAutoPlay = () => {
    if (swiperRef.current) {
      if (isAwardVisible) swiperRef.current.autoplay.start()
      else swiperRef.current.autoplay.stop()
    }
  }

  return (
    <Swiper
      onInit={onInit}
      slidesPerView={slidePerView}
      // initialSlide={1}
      // grabCursor={true}
      centeredSlides={true}
      spaceBetween={100}
      speed={1200}
      // keyboard={{
      //   enabled: true,
      // }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Keyboard]}
      className="h-full"
    >
      {awards?.map((award, i) => (
        <SwiperSlide key={i}>
          <div className="relative h-[425px] w-full flex items-end lg:h-[400px]">
            <div className="absolute h-12 w-12 top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center rounded-full shadow-md bg-primary">
              <FontAwesomeIcon
                icon={award.icon}
                className="text-[#333333]"
                size="lg"
              />
            </div>
            <div className="h-[400px] w-full p-5 pt-10 space-y-5 text-center rounded-xl bg-customGrayHeavy lg:h-[375px]">
              <div className="h-[50%] flex flex-col items-center space-y-3">
                <p className="text-xl font-bold">{award.name}</p>
                <p>{award.organization}</p>
                <p className="text-primary">{award.date}</p>
                {award.images && (
                  <div className="w-full flex justify-center">
                    <button onClick={() => setImageIndex(i)}>
                      <FontAwesomeIcon icon={faImage} size="lg" />
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
  )
}
