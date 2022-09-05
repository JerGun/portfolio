import "../styles/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css" // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core"
import Footer from "../components/Footer"
import { useRouter } from "next/router"

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <div className="relative h-full w-full bg-white">
      <Component {...pageProps} />
     {!router.pathname.startsWith("/admin")  && <Footer />}
    </div>
  )
}

export default MyApp
