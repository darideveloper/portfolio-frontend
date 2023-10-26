import Image from 'next/image'
import { useEffect } from 'react'

export default function Image3D({ src, alt, width, height, className, id }) {

  useEffect(() => {

    // Get 3d elements and parent
    const elem = document.querySelector(`#${id}`)
    const parent = elem.parentElement

    // Add perspective to parent
    parent.classList.add('perspective-wrapper')

    // Add position tracker when loads
    document.addEventListener('mousemove', e => {

      // Mouse position
      const x = e.pageX
      const y = e.pageY

      // Calcs
      const coords = elem.getBoundingClientRect()

      const elmX = coords.left + (elem.offsetWidth / 2)
      const elmY = coords.top + (elem.offsetHeight / 2)

      const angleX = (elmY - y) / 25
      const angleY = (elmX - x) / -25

      // Update rotation
      elem.style.transform = `rotateX(${angleX}deg)
                             rotateY(${angleY}deg)`

    })

  }, [])

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      id={id}
      className={`
        perspective 
        ${className}
      `}
    />
  )
}