import { motion } from 'framer-motion'
import Nav from '../../pages/nav/nav'
import React, { useEffect } from 'react'
import { preloadImages } from '../../utils/preloadImages'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const animation = {
  initial: { opacity: 0 },
  animate: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: { duration: 1.5, ease: [0.7, 0, 0.175, 1] },
  },
  exit: { clipPath: 'inset(0% 0% 110% 0%)', opacity: 1 },
}

const AnimatedPage = ({ children }) => {
  useEffect(() => {
    console.log('used effect')
    const preloader = document.querySelector('.preloader')

    const removePreloader = () => {
      gsap.to(preloader, {
        clipPath: 'inset(0% 0% 110% 0%)',
        duration: 2,
        ease: 'expo',
        delay: 1,
      })
      preloader.style.pointerEvents = 'none'
    }

    const animateNav = () => {
      gsap.from('nav', {
        y: '-100%',
        opacity: 0,
        duration: 2,
        ease: 'expo',
        delay: 1.8,
      })
    }

    preloadImages()
      .then(() => {
        removePreloader()
        animateNav()
      })
      .catch((err) => {
        console.log(err)
      })

    return () => {}
  }, [])

  return (
    <motion.div
      className="scroll__wrapper"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1, ease: [0.7, 0, 0.175, 1] }}
    >
      <div className="preloader"></div>
      <Nav />
      <div className="scroll__container">{children}</div>
    </motion.div>
  )
}

export default AnimatedPage
