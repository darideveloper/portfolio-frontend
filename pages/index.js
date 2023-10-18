import { fontTitle, fontRegular, fontAlternative } from "../lib/fonts"
import { useRouter } from 'next/router'
 
export default function Home(props) {
  const router = useRouter()
 
  return (
    <div
      onClick={() => {
        router.push('/another', '/another', { locale: 'fr' })
      }}
    >
      to /fr/another
    </div>
  )
}