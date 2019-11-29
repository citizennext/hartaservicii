import React from 'react'

import Layout from '../components/Layout'
import MainButton from '../components/MainButton'
export default function Index() {
  const test = () => console.log('click')
  return (
    <Layout>
      <MainButton label="Deschide harta" action={test} />
    </Layout>
  )
}
