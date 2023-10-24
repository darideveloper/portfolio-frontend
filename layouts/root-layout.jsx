import { metadata } from "@/lib/metadata"
import Head from "next/head"
import Header from "@/sections/header"
import { fontRegular } from "@/lib/fonts"

export default function RootLayout({ children, extraTitle = "", extraKeywords = [] }) {
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
      <Header />
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