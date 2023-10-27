import Image from 'next/image'
import Wrapper3D from '@/components/wrapper-3d'
import CodeBlock from '@/components/code-block'
import LineDecorator from './line-decorator'
import { useEffect, useState } from 'react'
import { fontAlternative } from '@/lib/fonts'
import { codePy, codeJs } from '@/lib/code-blocks'

/**
 * Hero section
 * @param {array} tools objects with name and image
 * @returns {jsx}
 */
export default function Hero({ tools }) {

  const [logoHover, setLogoHover] = useState(false)

  function rotateTools() {

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

  }

  useEffect(() => {

    // Rotate tools when loads and on resize
    window.addEventListener('resize', rotateTools)
    rotateTools()

  }, [tools])

  return (
    <div
      className={`
        hero
        container
        mx-auto
        w-full
        flex
        flex-col
        items-center
        justify-center
        pb-20
        relative
        ovwerflow-y-hidden
      `}
    >

      <h1
        className={`
          text-5xl xs:text-6xl sm:text-7xl
          block
          ${fontAlternative.className}
          font-bold
          uppercase
          pt-10
          ${logoHover ? "pb-16 xs:pb-20" : "pb-4"}
          duration-500
          glitch
          ${logoHover ? "glitch-anim" : ""}
        `}
        data-text="Dari Developer"
      >
        Dari Developer
      </h1>

      <Wrapper3D
        id="logo-wrapper"
        className={`
          logo-wrapper
          w-72 xs:w-96
          relative
          rounded-full
        `}
        onMouseEnter={() => setLogoHover(true)}
        onMouseLeave={() => setLogoHover(false)}
      >
        <Image
          src="/imgs/logo.png"
          alt="Dari Dev logo"
          width={500}
          height={500}
          className={`
            logo
            rounded-full
            mx-auto
            duartion-500
            w-7/12 xs:w-8/12
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
            mt-14 xs:mt-24
            pt-2
            rounded-full
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
                key={index}
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  className={`
                    w-8 xs:w-12
                    duration-500
                    ${logoHover ? "" : "!translate-x-20"}
                  `}
                />
              </div>
            ))
          }
        </div>

      </Wrapper3D>

      {/* Background decorators */}

      <CodeBlock
        code={codePy}
        className={`
          top-0
          left-0
          opacity-10 md:opacity-40
        `}
        id="code-py"
      />

      <CodeBlock
        code={codeJs}
        className={`
          bottom-0
          right-0
          hidden md:inline-block
          opacity-50
        `}
        id="code-js"
        reverse={true}
      />

      <LineDecorator
        className={`
          top-0
        `}
      />

      <LineDecorator
        mirror={true}
        className={`
          bottom-0
        `}
      />

    </div>
  )
}