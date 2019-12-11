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
import '@openfonts/koho_all'
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
`
const Layout: React.FC<{ location?: any }> = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    <Global />
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        maxWidth: 1170,
        mx: 'auto',
        px: 4,
        variant: 'layout.root',
      }}>
      <Sticky top={0} innerZ={9} activeClass="sticky-nav-active">
        <header
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            variant: 'layout.header',
          }}>
          <DrawerProvider>
            <Navbar />
          </DrawerProvider>
        </header>
      </Sticky>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          variant: 'layout.main',
        }}>
        <div
          sx={{
            mx: 'auto',
            variant: 'layout.container',
          }}>
          {children}
        </div>
      </main>
      <footer
        sx={{
          width: '100%',
          variant: 'layout.footer',
        }}>
        Footer content
      </footer>
    </div>
    <div id="overlay-root" />
  </ThemeProvider>
)
export default Layout
