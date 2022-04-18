import React, { useEffect } from 'react'
import './style.scss'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { preloadImages } from '../../utils/preloadImages'

gsap.registerPlugin(SplitText)

const CityTitle = ({ city, img }) => {
  useEffect(() => {
    const animate = () => {
      const title = document.querySelector('.city__title')
      const split = new SplitText(title.querySelector('h1'), {
        type: 'chars',
      })
      gsap.from(split.chars, {
        y: '100%',
        stagger: '0.07',
        duration: '2',
        ease: 'expo.inOut',
        delay: '1.2',
      })

      gsap.from('.city__image__wrapper', {
        clipPath: 'inset(101% 0% 0% 0%)',
        duration: '2',
        ease: 'expo.inOut',
        delay: '.9',
      })

      gsap.from('.city__image', {
        scale: 1.4,
        duration: '4',
        ease: 'power2',
        delay: '.9',
      })
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
    <div className="city__title">
      <div className="text__wrapper">
        <h1>{city}</h1>
      </div>
      <div className="city__image__wrapper">
        <img className="city__image" src={img} alt={city} />
      </div>
    </div>
  )
}

export default CityTitle
