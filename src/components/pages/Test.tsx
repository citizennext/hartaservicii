/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Header from '../Header'
import Footer from '../Footer'
import TestContent from './Test/Content'
import Layout from '../Layout'
import SidebarLeft from './Test/SidebarLeft'
import SidebarRight from './Test/SidebarRight'
import Seo from '../Seo/index'

export default class Test extends React.Component {
  render() {
    return (
      <div>
        <Seo page="test" />
        <Header />
        <Layout left={<SidebarLeft />} right={<SidebarRight />}>
          <TestContent />
        </Layout>
        <Footer />
      </div>
    )
  }
}
