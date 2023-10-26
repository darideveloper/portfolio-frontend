import Link from 'next/link'
import { navData } from '@/lib/nav'
import {  fontAlternative } from '@/lib/fonts'

/**
 * Nav component
 * @returns {jsx}
 */
export default function Nav() {
  return (
    <nav
      className={`
        ${fontAlternative.className}
        font-bold
        my-4 lg:my-0
      `}
    >
      <ul
        className={`
          flex
          items-center
          justify-between
          text-2xl
          uppercase
        `}
      >
        {
          navData.map(item => (
            <li
              key={item.link}
              className={`
                group
              `}
            >
              <Link
                href={item.link}
                className={`
                  p-2
                  m-1
                  duration-200
                  hover:text-blue
                `}
              >
                {item.text}
              </Link>
              <div
                className={`
                  w-0
                  border-b-2
                  border-blue
                  duration-200
                  group-hover:w-full
                `}
              >

              </div>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}