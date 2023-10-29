const api = "https://daridev-portfolio.herokuapp.com"
import { serialize } from 'next-mdx-remote/serialize'

/**
 * Get auth token to query data from API
 * @returns {str} tokwn for authentication generates with username and password
 */
export async function getToken() {

  // Generate token
  let formdata = new FormData()
  formdata.append("username", process.env.PORTFOLIO_USERNAME)
  formdata.append("password", process.env.PORTFOLIO_PASSWORD)

  // Get Token with username and password
  const res = await fetch(`${api}/api-token-auth/`, {
    method: 'POST',
    body: formdata,
  })
  const json = await res.json()
  const token = json.token

  return token
}

/**
 * get contact cards from API
 * @returns {array} objects with: id, image, name, redirect and svg
 */
export async function getContacts() {

  // Get token
  const token = await getToken()

  // Get contacts
  const res = await fetch(`${api}/contacts/`, {
    method: 'GET',
    headers: {
      "Authorization": `Token ${token}`
    }
  })
  const json = await res.json()
  return json.results
}

/**
 * get projects from API
 * @property {int} page number of page to query
 * @returns {array} objects with: id, name, start_data, last_update, is_done, 
 * project_type, logo, web_page, repo, license, tags, tools, related projects,
 * description, details, install, settings, run, build, test, deploy, roadmap,
 * media
 */
export async function getProjects (page=1) {

  // Calculate url with page
  const url = `${api}/projects/?limit=10&offset=${(page-1)*10}`

  // Get token
  const token = await getToken()

  // Query data
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      "Authorization": `Token ${token}`
    }
  })
  const json = await res.json()
  const results = json.results


  // Serialize md parts
  let resultsFormatted = []
  for (const project of results) {
    resultsFormatted.push ({
      ...project,
      description: await serialize(project.description),
      details: await serialize(project.details),
      install: await serialize(project.install),
      settings: await serialize(project.settings),
      run: await serialize(project.run),
      build: await serialize(project.build),
      test: await serialize(project.test),
      deploy: await serialize(project.deploy),
      roadmap: await serialize(project.roadmap),
    })
  }

  // Add projet "see more"
  resultsFormatted.push ({
    id: -1,
    name: 'See more',
    logo: "./imgs/see-more.svg",
    description: await serialize('**Go to projects page**'),
    tools: [],
    "is_done": true,
  })

  return resultsFormatted
}