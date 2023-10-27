import { fontAlternative } from '@/lib/fonts'
import { useEffect } from 'react'

/**
 * Code block with scroll animation for decoration
 * @param {string} code text to show
 * @param {string} className
 * @param {string} id
 * @param {bool} reverse reverse scroll. Default false
 */
export default function CodeBlock({ code, className, id, reverse=false}) {

  useEffect(() => {
    // Auto scroll animation
    const elem = document.querySelector(`#${id}`)

  }, [])

  return (
    <pre
      className={`
        inline-block
        absolute
        ${className}
        leading-4
        text-blue
        text-sm
        font-bold
        opacity-40
        ${fontAlternative.className}
        -z-10
        overflow-y-scroll
        h-72
        scroll-smooth
        no-scrollbar
      `}
      id={id}
    >
      <span
        className={`
          inline-block
          autoscroll
          ${reverse ? "reverse" : ""}
        `}
      >
        {code}
      </span>
    </pre>
  )
}