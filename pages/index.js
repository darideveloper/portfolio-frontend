import { fontTitle, fontRegular, fontAlternative } from "../lib/fonts"

export default function Home() {
  return (
    <>
      <p className={`${fontTitle.className}`}>title</p>
      <p className={`${fontRegular.className}`}>regular</p>
      <p className={`${fontAlternative.className}`}>alternative</p>
    </>
  )
}
