import Image from 'next/image'

export default function ContactIcon({ svg, link }) {

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
      />
     
    </a>
  )
}