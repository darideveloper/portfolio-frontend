import { metadata } from "@/lib/metadata"
import Head from "next/head"
import Header from "@/layouts/header"
import { fontRegular } from "@/lib/fonts"

/**
 * Description
 * @param {jsx} children
 * @param {array} contacts objects with: id, image, name, redirect and svg
 * @param {str} extraTitle="" extra title for the page
 * @param {array} extraKeywords=[] extra keywords for the page
 * @returns {jsx}
 */
export default function RootLayout({ children, contacts, extraTitle = "", extraKeywords = []}) {
  // Get metadata
  const title = metadata.title + (extraTitle && " | " + extraTitle)
  const keywords = metadata.keywords.concat(extraKeywords).join(", ")

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header 
        contacts={contacts}
      />
      <main
        className={`
        ${fontRegular.className}
        mx-auto
        w-full
      `}
      >
        {children}
      </main>
      <footer>

      </footer>
    </>
  )
}