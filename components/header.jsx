
import ContactIcon from '@/components/contact-icon'

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
      `}
    >
      <div className="icons">
        {
          contacts.map(contact => (
            <ContactIcon 
              key={contact.id}
              svg={contact.svg}
              link={contact.redirect}
            />
          ))
        }
      </div>
    </header>
  )
}