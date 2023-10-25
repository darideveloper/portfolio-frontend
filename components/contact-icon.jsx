import Image from 'next/image'

/**
 * Description
 * @param {str} svg image url
 * @param {str} link social media to redirect
 * @param {str} name social media name
 * @returns {jsx}
 */
export default function ContactIcon({ svg, link, name }) {

  return (
    <a
      className={`
        inline-block
        px-2
        duration-200
        hover:-translate-y-1
      `}
      href={link}
      target='_blank'
    >
      <Image
        src={svg}
        width={30}
        height={30}
        className={`
          w-auto h-6
        `}
        alt={`${name} icon`}
      />
     
    </a>
  )
}