import Slider from '@/components/slider'
import { fontAlternative } from '@/lib/fonts'
import { useEffect, useState } from 'react'

/**
 * Last projects section
 * @param {array} projects objects with: id, name, last_update, is_done, 
 * logo, tags, tools, description, ...
 * @returns {jsx}
 */
export default function LastProjects ({projects}) {

  const [slides, setSlides] = useState ([])

  useEffect (() => {
    // Get tools from projects
    let slides = projects.map (project => {
      return {
        id: project.id,
        image: project.logo,
        title: project.name,
        details: project.description,
      }
    })

    setSlides (slides)
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
      <Slider 
        slides={slides}
      />
    </div>
  )
}