import React, { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss'
import { preloadImages } from './preloadImages'

const useLocomotiveScroll = (start = true) => {
  useEffect(() => {
    if (!start) return
    const loco = new LocomotiveScroll({
      el: document.querySelector('#app'),
      smooth: true,
      touchMultiplier: 2,
      multiplier: 1,
      getDirection: true,
      mobile: {
        breakpoint: 0,
        smooth: true,
      },
      tablet: {
        breakpoint: 0,
        smooth: true,
      },
    })
    loco.on('scroll', (e) => {
      const nav = document.querySelector('nav')
      if (e.direction === 'up') nav.className = 'nav nav--active'
      if (e.direction === 'down') nav.className = 'nav nav--hidden'
    })
    preloadImages()
      .then(() => {
        loco.update()
      })
      .catch((err) => {
        console.log(err)
      })
    return () => {
      loco.destroy()
    }
  })
}
export default useLocomotiveScroll
