import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

import Title from '../../components/title/title'
import AnimatedPage from '../../components/animated-page/animated-page'

import gsap from 'gsap'

const Cities = () => {
  const [city, setCity] = useState('zrh')

  useEffect(() => {
    // cursor follower
    gsap.set('.cursor__follow', { xPercent: -50, yPercent: -50 })
    let xTo = gsap.quickTo('.cursor__follow', 'x', {
        duration: 1,
        ease: 'power3',
      }),
      yTo = gsap.quickTo('.cursor__follow', 'y', {
        duration: 1,
        ease: 'power3',
      })

    window.addEventListener('mousemove', (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    })

    document.querySelectorAll('h2').forEach((link) => {
      link.addEventListener('mouseenter', () => {
        setCity(link.id)
        gsap.to('.cursor__follow', {
          rotate: `${Math.floor(Math.random() * 30) - 15}deg`,

          duration: 0,
        })
        gsap.to('.cursor__follow', {
          opacity: 1,
          ease: 'power2',
          duration: 0.5,
        })
      })

      link.addEventListener('mouseleave', () => {
        gsap.to('.cursor__follow', {
          opacity: 0,
          ease: 'power2',
          duration: 0.5,
        })
      })
    })

    document.querySelector('html').style.overflow = 'hidden'

    return () => {
      document.querySelector('html').style.overflow = 'auto'
    }
  }, [])

  return (
    <AnimatedPage>
      <section className="cities">
        <Title title="cities">
          <div className="cities__list">
            <img
              className="cursor__follow"
              src={require(`../../assets/cities/${city}/miniature.jpg`)}
              alt="city"
            ></img>

            <Link to="/cities/zurich">
              <h2 id="zrh">Zurich</h2>
            </Link>
            <Link to="/cities/geneva">
              <h2 id="gva">Geneva</h2>
            </Link>
            <Link to="/cities/bern">
              <h2 id="bern">Bern</h2>
            </Link>
            <Link to="/cities/lausanne">
              <h2 id="ls">Lausanne</h2>
            </Link>
          </div>
        </Title>
      </section>
    </AnimatedPage>
  )
}

export default Cities
