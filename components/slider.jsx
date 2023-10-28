import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import { fontTitle } from '@/lib/fonts'
import Link from 'next/link'

import 'swiper/css'


/**
 * Description
 * @param {array} slides objects with id, image, title and details
 * @returns {any}
 */
export default function Slider({ slides }) {

  const [slidesPerView, setSlidesPerView] = useState(1)

  function updateSlidesPerView() {
    if (window.innerWidth < 608) setSlidesPerView(1)
    else if (window.innerWidth < 768) setSlidesPerView(2)
    else setSlidesPerView(3)
  }

  useEffect(() => {

    // Set slides per view when loads and on resize
    updateSlidesPerView ()
    window.addEventListener('resize', updateSlidesPerView)
  }, [])


  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log('slide change')}
    >
      {
        slides.map((slide) => (
          <SwiperSlide 
            className={`
              text-center
              cursor-pointer
              group
            `}
            key={slide.id}
          >
            <article
              className={`
                relative
                p-4
                w-full
                h-full
                pb-28
              `}
            >
              <Link 
                href={`/projects/${slide.id}`}
                className={`
                  absolute
                  z-10
                  top-0
                  left-0
                  w-full
                  h-full
                  rounded-xl
                  duration-300
                  inline-block
                  group-hover:shadow-inner
                  texture-hover
                  group-hover:shadow-blue
                  bg-transparent hover:bg-blue-20
                `}
              />

              <img
                src={slide.image || "/imgs/logo.png"}
                alt={slide.title}
                className={`
                  w-6/12 sm:w-8/12 xl:w-6/12
                  mx-auto
                  duration-500
                  group-hover:opacity-30
                `}
              />

              <div 
                className={`
                  texts
                  absolute
                  bottom-0
                  left-0
                  w-full
                  mb-5
                `}
              >
                <h3
                  className={`
                    ${fontTitle.className}
                    text-xl
                    my-4
                  `}
                >
                  {slide.title}
                </h3>
                <p
                  className={``}
                >
                  {slide.details}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}