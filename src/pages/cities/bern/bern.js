import React, { useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import CityTitle from '../../../components/city-title/city-title'
import DescriptionSection from '../../../components/description-section/description-section'
import {
  DividerLarge,
  DividerSmall,
  TextDivider,
  NextPage,
} from '../../../components/dividers/dividers'
import AnimatedPage from '../../../components/animated-page/animated-page'

import './style.scss'
import useLocomotiveScroll from '../../../utils/useLocoScroll'

const Bern = () => {
  useLocomotiveScroll()

  return (
    <AnimatedPage>
      <section className="bern" data-scroll-section>
        <CityTitle
          city="BERN"
          img={require('../../../assets/cities/bern/1.jpg')}
        />
        <DividerLarge img={require('../../../assets/cities/bern/2.jpg')} />
        <TextDivider
          title="Capital of Switzerland"
          subtitle="Also referred to as the federal city"
        />
        <DescriptionSection
          size="large"
          img={require('../../../assets/cities/bern/3.jpg')}
        >
          <p>
            Lying along a loop of the Aare River, it was founded as a military
            post in 1191 by Berthold V, duke of Zähringen. It became a free
            imperial city in 1218. Gradually extending its power, it became an
            independent state, and in 1353 it entered the Swiss Confederation.
          </p>
          <p>
            It was a scene of disputation in 1528 between Roman Catholics and
            reformers, which led to its subsequent championing of Protestant
            doctrines.
          </p>
          <p>
            It became a member of the Helvetic Republic and in 1848 was made the
            capital of Switzerland. It is headquarters of the international
            postal, railway, and copyright unions.
          </p>
        </DescriptionSection>
        <DividerSmall img={require('../../../assets/cities/bern/4.jpg')} />
        <DividerLarge img={require('../../../assets/cities/bern/5.jpg')} />
        <TextDivider title="City of bears" />
        <DescriptionSection img={require('../../../assets/cities/bern/6.jpg')}>
          <p>
            The city of Bern has had a close relationship with the bear since
            its foundation. According to legend, the city owes its name to the
            animal. The bear now appears on flags, fountains, and buildings, and
            can even be visited in the public BearPark.
          </p>
          <p>
            At the bottom of the Old Town of Bern, guests can have a look at the
            heraldic animal that lives in the cities famous BearPark. It is open
            year-round and the entrance is free. Around the BearPark are a wide
            range of seating and picture options.
          </p>
        </DescriptionSection>
        <DescriptionSection
          size="small"
          img={require('../../../assets/cities/bern/7.jpg')}
        >
          <p>
            Home to some of Switzerland’s greatest museums and galleries, Bern
            is considered a true citadel of culture. The combination of
            internationally renowned art and unique architecture makes for a
            memorable visit! Bern is an absolute must for culture aficionados.
          </p>
        </DescriptionSection>
        <DividerSmall img={require('../../../assets/cities/bern/8.jpg')} />
        <NextPage link="/cities/lausanne" />
      </section>
    </AnimatedPage>
  )
}

export default Bern
