/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Facebook } from 'react-feather'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { AlternativeButton, DetailsButton, FilterButton, MainButton, MoreButton, SocialButton } from '../components/buttons'
import { Hero } from '../components/HomeHero'
export default function Index(props: any) {
  const test = () => console.log('click')

  return (
    <Layout>
      <Hero />
      <SEO slug={props.location.pathname} isRepeatable={false} />
      <br />
      <br />
      <FilterButton label="Copii" count={6} />
      <br />
      <SocialButton action={test} label="Comunitate">
        <Facebook
          size={31}
          strokeWidth={1.5}
          style={{
            padding: '5.5px',
            border: 'solid 1.5px #fff',
            borderRadius: 26,
            margin: '-5.5px',
          }}
        />
      </SocialButton>
      <br />
      <MoreButton action={test} />
      <br />

      <br />
      <AlternativeButton action={test} />
      <br />
      <MainButton label="Deschide harta" action={test} />
    </Layout>
  )
}
