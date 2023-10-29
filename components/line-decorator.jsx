
import Image from 'next/image'

/**
 * Line image decoration
 * @param {string} className
 * @param {boolean} mirror mirror image in X axis and Y axis
 * @returns {jsx}
 */
export default function LineDecorator({className, mirror=false}) {
  return (
    <Image 
      src="/imgs/line.svg"
      width={1000}
      height={100}
      alt='Line decoration'
      className={`
        line-decorator
        w-full
        h-auto
        left-0
        absolute
        -z-20
        ${className}
        ${mirror ? "mirror" : ""}
      `}
    />
  )
}