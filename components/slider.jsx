import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import { fontTitle } from '@/lib/fonts'
import { MDXRemote } from 'next-mdx-remote'

import Link from 'next/link'

import 'swiper/css'


/**
 * Description
 * @param {array} slides objects with id, image, title and details
 * @param {function} setSwiperInstance save as state the swiper instance
 * @returns {any}
 */
export default function Slider({ slides, swiperRef, handleSlideChange }) {

  const [slidesPerView, setSlidesPerView] = useState(1)

  /**
   * Change number of slides per view in swipper depending on screen width
   */
  function updateSlidesPerView() {
    if (window.innerWidth < 608) setSlidesPerView(1)
    else if (window.innerWidth < 768) setSlidesPerView(2)
    else if (window.innerWidth < 1024) setSlidesPerView(3)
    else setSlidesPerView(4)
  }

  /**
   * Short long links to a max of 20 characters
   */
  function shortLinks() {
    const links = document.querySelectorAll('.slider-details a')
    links.forEach(link => {
      if (link.innerText.length > 20) {
        link.innerText = link.innerText.slice(0, 20) + '...'
      }
    })
  }

  useEffect(() => {

    // Short links when load
    shortLinks()

    // Set slides per view when loads and on resize
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
  }, [])


  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={slidesPerView}
      className={`
        w-11/12 xl:w-full
        mx-auto
        duration-500
        hover:-skew-x-2
      `}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={handleSlideChange}
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
                px-2
                pt-6
                w-full
                h-full
                pb-20 md:pb-28
                border-2
                border-blue-40 group-hover:border-transparent
                rounded-xl
                flex
                flex-col
                items-center
                justify-center
                duration-300
              `}
            >
              <Link
                href={slide.id != -1 ? `/projects/${slide.id}` : `/projects/`}
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

              <div
                className={`
                  logo-wrapper
                  w-40 sm:w-44 
                  h-40 sm:h-44 
                  flex
                  items-center
                  justify-center
                  mx-auto
                  p-4
                  rounded-full
                  bg-blue-20
                  group-hover:blur-sm
                `}
              >
                <img
                  src={slide.image || "/imgs/logo.png"}
                  alt={slide.title}
                  className={`
                    w-full
                    duration-500
                    group-hover:opacity-30
                  `}
                />
              </div>


              <div
                className={`
                  texts
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  w-10/12
                  mb-5
                  flex  
                  flex-col
                  items-center
                  justify-center
                  mx-auto
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
                <div
                  className={`
                    slider-details
                    h-0
                    overflow-hidden
                    duration-500
                    group-hover:h-24
                    w-11/12
                  `}
                >
                  <MDXRemote
                    {...slide.details}
                  />
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}