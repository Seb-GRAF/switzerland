import React, { useEffect } from 'react'
import './style.scss'

import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { preloadImages } from '../../utils/preloadImages'

gsap.registerPlugin(SplitText)

const Title = ({ children, title, subtitle }) => {
  useEffect(() => {
    const title = document.querySelector('.title')

    const animate = () => {
      gsap.from(
        new SplitText(title.querySelectorAll('h1'), {
          type: 'chars',
        }).chars,
        {
          y: '100%',
          stagger: '0.07',
          duration: '2',
          ease: 'expo.inOut',
          delay: '.5',
        }
      )
      gsap.from(
        new SplitText(title.querySelectorAll('h2'), {
          type: 'words',
        }).words,
        {
          y: '100%',
          stagger: '0.1',
          duration: '2',
          ease: 'expo.inOut',
          delay: '.8',
        }
      )
    }

    preloadImages()
      .then(() => {
        animate()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className="title">
      <div className="text__wrapper">
        <h1>{title}</h1>
      </div>
      <div className="text__wrapper">
        <h2>{subtitle}</h2>
      </div>
      {children}
      {/* <p data-scroll data-scroll-speed="1">
        ↓
      </p> */}
    </div>
  )
}

export default Title
