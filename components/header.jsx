
import ContactIcon from '@/components/contact-icon'
import Nav from '@/components/nav'
import Search from '@/components/search'

/**
 * Header section
 * @param {array} contacts objects with: id, image, name, redirect and svg
 * @returns {jsx}
 */
export default function Header ({contacts}) {

  return (
    <header 
      className={`
        my-4
        container
        mx-auto
        flex-col lg:flex-row
        flex
        items-center
        justify-between
      `}
    >

      <div className="icons">
        {
          contacts.map(contact => (
            <ContactIcon 
              key={contact.id}
              svg={contact.svg}
              link={contact.redirect}
              name={contact.name}
            />
          ))
        }
      </div>

      <div 
        className={`
          nav-wrapper
          flex
          flex-col lg:flex-row
          items-center
          justify-between
          w-full md:w-8/12
          pl-0 xl:pl-24
        `}
      >

        <Nav />
        <Search />
      </div>
      
    </header>
  )
}