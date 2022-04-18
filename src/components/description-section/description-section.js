import React from 'react'
import './style.scss'

import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

const DescriptionSection = ({ children, img, size }) => {
  return (
    <div className="description__section">
      <div className="description__text">{children}</div>
      <div className={`description__image ${size}`}>
        <img src={img} alt="city" />
      </div>
    </div>
  )
}

export default DescriptionSection
