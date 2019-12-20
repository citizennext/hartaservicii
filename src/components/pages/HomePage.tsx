/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Header from '../Header'
import Footer from '../Footer'
import HomePageContent from './HomePage/Content'
import Layout from '../Layout'
import Seo from '../Seo/index'

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Seo page="homepage" />
        <Header />
        <Layout>
          <HomePageContent />
        </Layout>
        <Footer />
      </div>
    )
  }
}
