/** @jsx jsx */
import React from 'react'
import styled from '@emotion/styled'
import { jsx, ThemeProvider } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui'
import Sticky from 'react-stickynode'
import { DrawerProvider } from './DrawerContext'
import Navbar from './NavBar'
import Global from './Global'
import 'typeface-montserrat'
import 'typeface-koho'
const Wrapper = styled.div`
  padding: 0px 20px;
  overflow: hidden;
  @media (min-width: 768px) {
    max-width: 728px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
    margin: 0 auto;
  }
  .reusecore__navbar {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    transition: all 0.3s ease;
  }
`
const Layout: React.FC<{ location?: any }> = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <Global />
    <Wrapper>
      <Sticky top={0} innerZ={9} activeClass="sticky-nav-active">
        <DrawerProvider>
          <Navbar />
        </DrawerProvider>
      </Sticky>
      {children}
    </Wrapper>
    <div id="overlay-root" />
  </ThemeProvider>
)
export default Layout
