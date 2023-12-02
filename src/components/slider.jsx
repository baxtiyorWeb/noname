import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"
import img5 from "../assets/images/img5.jpg"
import img8 from "../assets/images/img8.jpg"
import img10 from "../assets/images/img10.jpg"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { EffectCoverflow, Pagination, Navigation, EffectCards } from "swiper/modules"

export default function Slider() {
    return (
        <div className='container'>
            <div className="swiper-wrapper">
                <Swiper effect='coverflow'
                    width={100}
                    grabCursor={true}
                    centeredSlides={true}
                    centerInsufficientSlides
                    loop={true}
                    slidesPerView={'auto'}

                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 100,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true

                        }

                    }
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        clickable: true,
                    }}

                    modules={[EffectCoverflow, Pagination, Navigation, EffectCards]}

                    className='swiper-container'
                >
                    <div className="swiper-slide">
                        <SwiperSlide  >
                            <img src={img1} alt="slide-img" className='w-full h-full' />
                        </SwiperSlide>
                    </div>
                    <div className="swiper-slide">
                        <SwiperSlide >
                            <img src={img2} alt="slide-img" />
                        </SwiperSlide>
                    </div>

                    <div className="swiper-slide">
                        <SwiperSlide >
                            <img src={img3} alt="slide-img" />
                        </SwiperSlide>
                    </div>
                    <div className="swiper-slide">
                        <SwiperSlide >
                            <img src={img4} alt="slide-img" />
                        </SwiperSlide>
                    </div>
                    <div className="swiper-slide">
                        <SwiperSlide zoom >
                            <img src={img5} alt="slide-img" />
                        </SwiperSlide>
                    </div>
                    <div className="swiper-slide">
                        <SwiperSlide >
                            <img src={img8} alt="slide-img" />
                        </SwiperSlide>
                    </div>
                    <div className="swiper-slide">
                        <SwiperSlide >
                            <img src={img10} alt="slide-img" />
                        </SwiperSlide>
                    </div>
                </Swiper>
                <div className="clider-controller">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                </div>
                <div className='swiper-pagination'></div>

            </div>
        </div>
    )
}
