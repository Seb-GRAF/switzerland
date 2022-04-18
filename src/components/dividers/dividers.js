import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

const DividerLarge = ({ img }) => {
  return (
    <div className="divider__large">
      <img className="divider__large__image" src={img} alt="large divider" />
    </div>
  )
}

const DividerSmall = ({ img, source }) => {
  useEffect(() => {
    const dividers = gsap.utils.toArray('.divider__small')

    dividers.forEach((divider) => {
      gsap.from(divider, {
        scrollTrigger: {
          trigger: divider,
          start: 'center bottom',
          toggleClass: 'in-view',
          once: true,
        },
      })
    })
  }, [])
  return (
    <div className="divider__small">
      <div className="divider__image">
        <img src={img} alt="small divider" />
      </div>
    </div>
  )
}

const TextDivider = ({ title, subtitle }) => {
  useEffect(() => {
    const dividers = gsap.utils.toArray('.text__divider')

    dividers.forEach((divider) => {
      const splitTitle = new SplitText(divider.querySelector('h1'), {
        type: 'words',
      })
      const splitText = new SplitText(divider.querySelector('h2'), {
        type: 'words',
      })

      gsap.from(splitTitle.words, {
        scrollTrigger: {
          trigger: divider.querySelector('h1'),
          start: 'center bottom',
          end: 'center bottom',
          scrub: 2,
        },
        duration: 5,
        stagger: 0.2,
        delay: 1,
        y: '100%',
      })
      gsap.from(splitText.words, {
        scrollTrigger: {
          trigger: divider.querySelector('h2'),
          start: 'center bottom',
          end: 'center bottom',
          scrub: 2,
        },
        duration: 5,
        stagger: 0.1,
        delay: 1,
        y: '100%',
      })
    })
  }, [])
  return (
    <div className="text__divider">
      <div className="text__wrapper">
        <h1>{title}</h1>
      </div>
      <div className="text__wrapper">
        <h2>{subtitle}</h2>
      </div>
    </div>
  )
}

const NextPage = ({ link }) => {
  return (
    <Link to={link}>
      <div className="next__page">
        <svg
          width="30"
          height="17"
          viewBox="0 0 30 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="13.2676"
            y="15.0166"
            width="21.2368"
            height="2"
            transform="rotate(-45 13.2676 15.0166)"
            fill="currentColor"
          ></rect>
          <rect
            x="1.41406"
            y="0.283203"
            width="20.5418"
            height="2"
            transform="rotate(45 1.41406 0.283203)"
            fill="currentColor"
          ></rect>
        </svg>
      </div>
    </Link>
  )
}
export { DividerLarge, DividerSmall, TextDivider, NextPage }
