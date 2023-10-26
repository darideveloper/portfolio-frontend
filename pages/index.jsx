import { getContacts, getProjects } from "@/lib/portfolio"
import RootLayout from "@/layouts/root-layout"
import Hero from "@/components/hero"

/**
 * Description
 * @param {array} contacts objects with: id, image, name, redirect and svg
 * @returns {jsx}
 */
export default function Home ({contacts, projects}) {

  // Get tools from projects
  let tools = projects.map (project => project.tools)

  // Remove projects ids (keep only name and image)
  tools = tools.map (tool => tool.map (t => ({name: t.name, image: t.image})))
  
  // Move all tools to main list without duplicates
  let mainTools = []
  tools.forEach (tool => tool.forEach (t => {
    if (!mainTools.find (mt => mt.name === t.name))
      mainTools.push (t)
  }))

  // If there are more than 12 tools, select 12 random
  if (mainTools.length > 12) {
    mainTools = mainTools.sort (() => Math.random() - 0.5)
    mainTools = mainTools.slice (0, 12)
  }

  return (
    <RootLayout 
      extraTitle="Home"
      extraKeywords={["home", "index"]}
      contacts={contacts}
    >
      
      <Hero tools={mainTools} />

    </RootLayout>
  )
}

export async function getStaticProps() {

  // Get contacts
  const contacts = await getContacts()
  const projects = await getProjects()

  return {
    props: {
      contacts, projects
    }
  } 
}