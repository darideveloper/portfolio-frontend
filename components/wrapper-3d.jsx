import { useEffect } from 'react'

/**
 * Wrapper with 3d perspective animation, when move cursor
 * @param {children} children
 * @param {string} className
 * @param {string} id 
 * @returns 
 */
export default function Wrapper3D({ children, className, id, onMouseEnter, onMouseLeave }) {

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
    <div 
      id={id}
      className={`
        perspective
        ${className}
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}