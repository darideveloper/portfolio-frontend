import { getContacts } from "@/lib/portfolio"
import RootLayout from "@/layouts/root-layout"

/**
 * Description
 * @param {array} contacts objects with: id, image, name, redirect and svg
 * @returns {jsx}
 */
export default function Home ({contacts}) {

  return (
    <RootLayout 
      extraTitle="Home"
      extraKeywords={["home", "index"]}
      contacts={contacts}
    >
      <h1>Hello</h1>
    </RootLayout>
  )
}

export async function getStaticProps() {

  // Get contacts
  const contacts = await getContacts()

  return {
    props: {
      contacts
    }
  } 
}