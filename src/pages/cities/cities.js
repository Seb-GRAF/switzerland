import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

import Title from '../../components/title/title'
import AnimatedPage from '../../components/animated-page/animated-page'
import useSmoothScroll from '../../utils/useSmoothScroll'

const Cities = () => {
  useSmoothScroll(true)

  return (
    <AnimatedPage>
      <section className="cities">
        <Title title="cities">
          <div className="cities__list">
            <Link to="/cities/zurich">
              <h2 id="zrh">Zurich</h2>
            </Link>
            <Link to="/cities/geneva">
              <h2 id="gva">Geneva</h2>
            </Link>
            <Link to="/cities/bern">
              <h2 id="be">Bern</h2>
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
