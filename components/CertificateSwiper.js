import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function CertificateSwiper({
  slidePerView,
  certificates,
  setImageIndex,
}) {
  return (
    <Swiper
      slidesPerView={slidePerView}
      centeredSlides={true}
      spaceBetween={0}
      speed={1200}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {certificates?.map((certificate, i) => (
        <SwiperSlide key={i}>
          <div className="h-full w-full flex justify-center" key={i}>
            <button
              className="w-full flex flex-col items-center space-y-3 md:w-2/3 lg:w-1/2"
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
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
