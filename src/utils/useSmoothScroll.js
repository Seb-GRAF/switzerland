import { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollSmoother from 'gsap/ScrollSmoother'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { preloadImages } from './preloadImages'
gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default function useSmoothScroll(paused = false) {
  const [nav, setNav] = useState(true)

  useEffect(() => {
    if (!nav) gsap.to('nav', { translateY: -100, duration: 0.5 })
    if (nav) gsap.to('nav', { translateY: 0, duration: 0.5 })
  }, [nav])

  useEffect(() => {
    preloadImages()
      .then(() => {
        const smoother = ScrollSmoother.create({
          content: '.scroll__container',
          wrapper: '.scroll__wrapper',
          smooth: 0.5,
          effects: true,
          ease: 'expo',
          ignoreMobileResize: true,
        })
        smoother.effects('img', { speed: 0.7 })
        smoother.scrollTo(0)

        window.addEventListener('scroll', () => {
          let velocity = smoother.getVelocity()
          if (velocity >= 0.1 && nav) setNav(false)
          else setNav(true)
        })
      })
      .catch((err) => {
        console.log(err)
      })

    if (paused) {
      document.querySelector('html').style.overflow = 'hidden'
    }
    return () => {
      if (paused) {
        document.querySelector('html').style.overflow = 'visible'
      }
      ScrollSmoother.get().kill()
    }
  }, [])
}
