import { getContacts, getProjects } from "@/lib/portfolio"
import { useEffect, useState } from "react"
import RootLayout from "@/layouts/root-layout"
import Hero from "@/components/hero"
import LastProjects from "@/components/last-projects"

/**
 * Description
 * @param {array} contacts objects with: id, image, name, redirect and svg
 * @returns {jsx}
 */
export default function Home ({contacts, projects}) {

  const [mainTools, setMainTools] = useState ([])

  useEffect (() => {
    // Get tools from projects
    let tools = projects.map (project => project.tools)
  
    // Remove projects ids (keep only name and image)
    tools = tools.map (tool => tool.map (t => ({name: t.name, image: t.image})))
    const toolsCopy = [...tools]
    
    // Move all tools to main list without duplicates
    tools = []
    toolsCopy.forEach (tool => tool.forEach (t => {
      if (!tools.find (mt => mt.name === t.name))
      tools.push (t)
    }))
  
    // If there are more than 12 tools, select 12 random
    if (tools.length > 12) {
      tools = tools.sort (() => Math.random() - 0.5)
      tools = tools.slice (0, 12)
    }

    setMainTools (tools)

  }, [projects])


  return (
    <RootLayout 
      extraTitle="Home"
      extraKeywords={["home", "index"]}
      contacts={contacts}
    >
      
      <Hero tools={mainTools} />
      <LastProjects projects={projects} />

    </RootLayout>
  )
}

export async function getStaticProps() {

  // Get contacts
  const contacts = await getContacts()
  const projects = await getProjects()

  console.log ({projects})

  return {
    props: {
      contacts, projects
    }
  } 
}