'use-client'

import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export function AOSinit() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    })
  }, [])


  return null;
}
