import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { Link } from 'react-router-dom'
import useLocomotiveScroll from '../../utils/useLocoScroll'
import {
  DividerLarge,
  DividerSmall,
  TextDivider,
} from '../../components/dividers/dividers'
import CityTitle from '../../components/city-title/city-title'
import DescriptionSection from '../../components/description-section/description-section'

import './style.scss'

import Title from '../../components/title/title'
import AnimatedPage from '../../components/animated-page/animated-page'

const Cities = () => {
  useLocomotiveScroll()

  return (
    <AnimatedPage>
      <section className="cities" data-scroll-section>
        <Title title="cities">
          <div className="cities__list" data-scroll>
            <Link to="/cities/zurich">
              <p id="zrh">Zurich</p>
            </Link>
            <Link to="/cities/geneva">
              <p id="gva">Geneva</p>
            </Link>
            <Link to="/cities/bern">
              <p id="be">Bern</p>
            </Link>
            <Link to="/cities/lausanne">
              <p id="ls">Lausanne</p>
            </Link>
          </div>
        </Title>
      </section>
    </AnimatedPage>
  )
}

export default Cities
