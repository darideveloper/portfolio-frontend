import Image from 'next/image'
import Wrapper3D from './wrapper-3d'
import { useEffect, useState } from 'react'

/**
 * Hero section
 * @param {array} tools objects with name and image
 * @returns {jsx}
 */
export default function Hero({ tools }) {

  const [logoHover, setLogoHover] = useState(false)

  useEffect(() => {

    // Calculate rotation
    const rotate = 360 / tools.length

    // Get tools elements
    const toolsWrapper = document.querySelector('.tools')
    const toolsElems = toolsWrapper.querySelectorAll('.tool')

    // Rotate each tool
    toolsElems.forEach((tool, index) => {

      // Move rotation origin to middle of wrapper
      tool.style.transformOrigin = `${toolsWrapper.offsetWidth / 2}px`

      // Rotate
      tool.style.transform = `rotate(${rotate * index}deg)`

      // Rotate inside image
      const img = tool.querySelector('img')
      img.style.transform = `rotate(-${rotate * index}deg)`

      // Gray image
      img.style.filter = 'grayscale(70%)'
    })

  }, [tools])

  return (
    <div
      className={`
        hero
        w-full
        flex
        items-center
        justify-center
        py-20
      `}
    >

      <Wrapper3D
        id="logo-wrapper"
        className={`
          logo-wrapper
          w-1/2
          max-w-sm
          relative
        `}
      >
        <Image
          src="/imgs/logo.png"
          alt="Dari Dev logo"
          width={500}
          height={500}
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          className={`
            logo
            rounded-full
            mx-auto
            duartion-500
            w-8/12
            duration-500
            shadow-xl hover:shadow-lg
            shadow-blue-40
          `}
        />

        <div
          className={`
            tools
            absolute
            -z-10
            w-full
            h-full
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            mt-24
            pt-2
          `}
        >
          {
            tools.map((tool, index) => (
              <div
                className={`
                  tool
                  absolute
                  mr-10
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                `}
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  key={index}
                  className={`
                    w-12
                    duration-500
                    ${logoHover ? "" : "!translate-x-20"}
                  `}
                />
              </div>
            ))
          }
        </div>

      </Wrapper3D>

    </div>
  )
}