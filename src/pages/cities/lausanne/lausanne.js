import React from 'react'

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

import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

const Lausanne = () => {
  return (
    <AnimatedPage>
      <section className="lausanne">
        <CityTitle
          city="LAUSANNE"
          img={require('../../../assets/cities/ls/1.jpg')}
        />
        <DividerLarge img={require('../../../assets/cities/ls/2.jpg')} />
        <TextDivider
          title="Olympic Capital"
          subtitle="Over the years, more and more International Sports Federations and sports organizations have joined the IOC in making Lausanne their home."
        />

        <DescriptionSection
          size="large"
          img={require('../../../assets/cities/ls/3.jpg')}
        >
          <p>
            But moreover, Lausanne, in collaboration with the Canton de Vaud,
            has become the home of international sport by hosting some of the
            most important events on the planet.
          </p>
          <p>
            In July 2015, when the IOC awarded the 2020 Youth Olympic Games to
            the city, it officially made Lausanne an Olympic City in every
            aspect of the term. Lausanne was also be the host of the 2019 IIHF
            World Championships, the 2019 ITU Grand Final, the yearly
            Athletissima, and more events keep being added to the list!
          </p>
          <p>
            It became a member of the Helvetic Republic and in 1848 was made the
            capital of Switzerland. It is headquarters of the international
            postal, railway, and copyright unions.
          </p>
        </DescriptionSection>
        <DividerSmall img={require('../../../assets/cities/ls/4.jpg')} />
        <DividerLarge img={require('../../../assets/cities/ls/5.jpg')} />
        <TextDivider
          title="City of art and culture"
          subtitle="The cultural city of Lausanne is multifaceted and vibrant: from Vidy to Vallon and on to Flon and Malley, great names and discoveries accompany you throughout your cultural getaways. Every day, you can choose from a score of museums, over thirty performance venues and a multitude of festivals."
        />
        <DescriptionSection
          size="large"
          img={require('../../../assets/cities/ls/6.jpg')}
        >
          <p>
            Cultural production in Lausanne covers every sphere of the arts,
            although dance, opera and theatre give the city a particularly high
            profile on the Swiss and international stages. Prestigious
            institutions such as the Ballet Béjart, the Lausanne Opera and the
            Vidy-Lausanne Theatre thus play the role of ambassadors for Lausanne
            abroad.
          </p>
          <p>
            Among the twenty or so of the town‟s museums are some that are
            utterly unique, such as the Olympic Museum or the Collection of Art
            Brut, a point of reference for marginal art. There is also the
            Elysée Museum, dedicated entirely to photography, the only one of
            its kind in French-speaking Switzerland.
          </p>
        </DescriptionSection>
        <DescriptionSection img={require('../../../assets/cities/ls/7.jpg')}>
          <p>
            Cultural heritage is omnipresent in Lausanne. At the heart of the
            city it is embodied by the majestic Gothic cathedral and the
            historical Cité district, while the remains of ancient Roman
            dwellings can be found on the outskirts.
          </p>
          <p>
            Finally, thanks to the multitude of festivals and the innumerable
            small drama companies and experimental theatres that bring life to
            the districts, culture is permanently within everyone‟s grasp here.
          </p>
        </DescriptionSection>
        <DescriptionSection img={require('../../../assets/cities/ls/8.jpg')}>
          <p>
            Lausanne has nearly two hundred public and private schools ranging
            from nursery to university with specialist schools in between.
          </p>
          <p>
            Whether in science, art or modern technologies, Lausanne has become
            a global point of reference in terms of academic and vocational
            education, attracting high numbers of foreign students every year.
            its university and institute of technology – which are home to
            prestigious centres of research – are placed at the top of
            international rankings.
          </p>
        </DescriptionSection>
        <DividerSmall img={require('../../../assets/cities/ls/9.jpg')} />
        <NextPage link="/cities" />
      </section>
    </AnimatedPage>
  )
}

export default Lausanne
