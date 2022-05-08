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
    gsap.set('.cursor-follow', { xPercent: -50, yPercent: -50 })
    let xTo = gsap.quickTo('.cursor-follow', 'x', {
        duration: 1,
        ease: 'power3',
      }),
      yTo = gsap.quickTo('.cursor-follow', 'y', {
        duration: 1,
        ease: 'power3',
      })

    window.addEventListener('mousemove', (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    })

    let links = document.querySelectorAll('h2')
    links.forEach((link) => {
      link.addEventListener('mouseenter', (e) => {
        setCity(link.id)
        gsap.set('.cursor-follow', {
          rotate: `${Math.floor(Math.random() * 30) - 15}deg`,
        })

        gsap.to('.cursor-follow', {
          opacity: 1,
          ease: 'power2',
          duration: 0.5,
        })

        links.forEach((link) => {
          if (link.id !== e.target.id) {
            gsap.to(link, {
              opacity: 0.3,
              duration: 0.5,
              color: '#cdc9bd',
            })
          } else {
            gsap.to(e.target, {
              opacity: 1,
              duration: 0.5,
              color: '#fff',
            })
          }
        })
      })

      link.addEventListener('mouseleave', () => {
        gsap.to('.cursor-follow', {
          opacity: 0,
          ease: 'power2',
          duration: 0.5,
        })

        gsap.to(links, {
          opacity: 1,
          color: '#cdc9bd',

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
            <div className="cursor-follow">
              <img
                className={`cursor-follow__img cursor-follow__img--zrh ${
                  city === 'zrh' ? 'active' : ''
                }`}
                src={require(`../../assets/cities/zrh/miniature.jpg`)}
                alt="zurich"
              ></img>
              <img
                className={`cursor-follow__img cursor-follow__img--gva ${
                  city === 'gva' ? 'active' : ''
                }`}
                src={require(`../../assets/cities/gva/miniature.jpg`)}
                alt="geneva"
              ></img>
              <img
                className={`cursor-follow__img cursor-follow__img--bern ${
                  city === 'bern' ? 'active' : ''
                }`}
                src={require(`../../assets/cities/bern/miniature.jpg`)}
                alt="bern"
              ></img>
              <img
                className={`cursor-follow__img cursor-follow__img--ls ${
                  city === 'ls' ? 'active' : ''
                }`}
                src={require(`../../assets/cities/ls/miniature.jpg`)}
                alt="lausanne"
              ></img>
            </div>

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
