import "../styles/globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css" // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core"
import SmoothScroll from "@components/SmoothScroll"

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full w-full bg-white select-none">
      {/* <SmoothScroll> */}
        <Component {...pageProps} />
      {/* </SmoothScroll> */}
    </div>
  )
}

export default MyApp
