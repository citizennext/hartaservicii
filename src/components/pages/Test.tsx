/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Header from '../Header'
import Footer from '../Footer'
import TestContent from './Test/Content'
import Layout from '../Layout'
import SidebarLeft from './Test/SidebarLeft'
import SidebarRight from './Test/SidebarRight'

export default class Test extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Layout left={<SidebarLeft />} right={<SidebarRight />}>
          <TestContent />
        </Layout>
        <Footer />
      </div>
    )
  }
}
