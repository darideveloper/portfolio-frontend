import { fontAlternative } from '@/lib/fonts'
import { useEffect, useState } from 'react'
import { useRef } from 'react'

import Slider from '@/components/slider'
import Button from '@/components/button'

/**
 * Last projects section
 * @param {array} projects objects with: id, name, last_update, is_done, 
 * logo, tags, tools, description, ...
 * @returns {jsx}
 */
export default function LastProjects({ projects }) {

  // Filter done projects
  projects = projects.filter(project => project.is_done === true)

  const [slides, setSlides] = useState([])
  const swiperRef = useRef(null)
  const [sliderPrevActive, setSliderPrevActive] = useState(false)
  const [sliderNextActive, setSliderNextActive] = useState(true)

  /**
   * Move to next swiper slide
   */
  function sliderGoNext() {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  /**
   * Move to previous swiper slide
   */
  function sliderGoPrev() {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  function handleSlideChange(swiper) {
    // Disable prev button
    if (swiper.isBeginning) {
      setSliderPrevActive (false)
    } else {
      setSliderPrevActive (true)
    }

    // Disable next button
    if (swiper.isEnd) {
      setSliderNextActive (false)
    } else {
      setSliderNextActive (true)
    }
  }

  useEffect(() => {
    // Get tools from projects
    let slides = projects.map(project => {
      return {
        id: project.id,
        image: project.logo,
        title: project.name,
        details: project.description,
      }
    })

    setSlides(slides)
  }, [projects])


  return (
    <div
      className={`
        last-projects
        mt-20
        container
        mx-auto
      `}
    >

      <div
        className={`
          title-wrapper
          flex
          items-center
          justify-center
          w-full
        `}
      >

        {/* Section header and slide buttons */}
        <Button
          icon="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"
          className={`
            mb-10
            w-20
            rotate-180
          `}
          onClick={sliderGoPrev}
          disabled={!sliderPrevActive}
        />

        <h2
          className={`
            text-4xl
            font-bold
            text-center
            mb-10
            ${fontAlternative.className}
            uppercase
          `}
        >
          Last Projects
        </h2>

        <Button
          icon="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"
          className={`
            mb-10
            w-20
          `}
          onClick={sliderGoNext}
          disabled={!sliderNextActive}
        />
      </div>

      <Slider
        slides={slides}
        swiperRef={swiperRef}
        handleSlideChange={handleSlideChange}
      />
    </div>
  )
}