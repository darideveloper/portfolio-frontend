import { metadata } from "@/lib/metadata"

export default function RootLayout({ children, extraTitle = "", extraKeywords = [] }) {
  // Get metadata
  const title = metadata.title + (extraTitle && " | " + extraTitle)
  const keyword = metadata.keywords.concat(extraKeywords).join(", ")
  
  return (
    <>
      <head>
      </head>
    </>
  )
}