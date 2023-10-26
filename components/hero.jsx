import Image from 'next/image'
import Image3D from './image-3d'
/**
 * Hero section
 * @param {list} tools objects with name and image
 * @returns {jsx}
 */
export default function Hero ({tools}) {

 
  return (
    <div 
      className={`
        hero
        w-full
        debug
        relative
        group
      `}
    >
      
      <Image3D 
        src="/imgs/logo.png"
        alt="Dari Dev logo"
        width={500}
        height={500}
        id={'logo-3d'}
        className={`
          logo
          rounded-full
          mx-auto
          w-1/2
          duartion-500
        `}
      />
      
    </div>
  )
}