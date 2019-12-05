import React from 'react'
import { Facebook } from 'react-feather'
import Layout from '../components/Layout'
import { AlternativeButton, DetailsButton, FilterButton, MainButton, MoreButton, SocialButton } from '../components/buttons'
export default function Index() {
  const test = () => console.log('click')
  return (
    <Layout>
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
      <DetailsButton action={test} />
      <br />
      <AlternativeButton action={test} />
      <br />
      <MainButton label="Deschide harta" action={test} />
    </Layout>
  )
}
