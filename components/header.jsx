
import ContactIcon from '@/components/contact-icon'
import Nav from '@/components/nav'
import Search from '@/components/search'

/**
 * Description
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

      <Nav />

      <Search />
      
    </header>
  )
}