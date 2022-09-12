import { useEffect } from "react"
import Scrollbar from "smooth-scrollbar"
// import {OverscrollPlugin} from "smooth-scrollbar/plugins/overscroll"

export default function SmoothScroll() {
  const overScrollOptions = {
    enable: true,
    effect: "bounce",
    damping: 0.15,
    maxOverScroll: 50,
  }

  const options = {
    damping: 0.1,
    // plugins: {
    //   overscroll: { ...overScrollOptions },
    // },
  }

  useEffect(() => {
    // Scrollbar.use(OverscrollPlugin)
    Scrollbar.init(document.body, options)
  }, [])

  return null
}
