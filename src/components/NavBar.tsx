/** @jsx jsx */
import { Fragment, useContext } from 'react'
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Drawer from './Drawer'
import { useWindowSize } from '../hooks/useWindowSize'
import Logo from '../images/logo.svg'
import { DrawerContext } from './DrawerContext'
import { Burger, Close } from './icons'
const pages = [
  {
    path: '/harta',
    label: 'Harta',
  },
  {
    path: '/despre',
    label: 'Despre noi',
  },
  {
    path: '/noutati',
    label: 'Noutăți',
  },
  {
    path: '/parteneri',
    label: 'Parteneri',
  },
  {
    path: '/statistici',
    label: 'Statistici',
  },
  {
    path: '/contact',
    label: 'Contact',
  },
]
const Navbar = () => {
  // @ts-ignore
  const { state, dispatch } = useContext(DrawerContext)

  // Toggle drawer
  const openDrawer = () => {
    dispatch((current: boolean) => !current)
  }
  const windowSize = useWindowSize()

  return (
    <NavbarWrapper>
      <Container>
        <Link to="/" style={{ height: 70 }}>
          <img src={Logo} alt="" />
        </Link>
        {windowSize.width && windowSize.width < 768 ? (
          <Drawer
            width="300px"
            placement="right"
            drawerHandler={<Burger size={26} sx={{ color: 'primary' }} />}
            open={state}
            toggleHandler={openDrawer}
            closeButton={<Close size={32} sx={{ color: 'background' }} />}>
            <ul sx={{ marginTop: 123, paddingLeft: 20 }}>
              {pages.map(page => (
                <li
                  key={page.path}
                  sx={{
                    listStyle: 'none',
                    marginBottom: '1em',
                    borderLeft: '3px solid',
                    borderColor: 'background',
                  }}>
                  <Link
                    to={page.path}
                    activeClassName="active"
                    sx={{
                      color: 'background',
                      fontWeight: 'headingSemi',
                      fontSize: 22,
                      fontFamily: 'heading',
                      lineHeight: 1,
                      padding: '0 0.5em 0 0.5em',
                      textDecoration: 'none',
                    }}>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Drawer>
        ) : (
          <Fragment>
            <div sx={{ mx: 'auto' }} />
            {pages.map(page => (
              <Link
                key={page.path}
                to={page.path}
                activeClassName="active"
                sx={{
                  color: 'text',
                  fontWeight: 'headingSemi',
                  borderLeft: '3px solid',
                  borderColor: 'accent',
                  fontSize: 14,
                  fontFamily: 'heading',
                  lineHeight: 1,
                  padding: '0 0.5em 0 0.5em',
                  textDecoration: 'none',
                  marginLeft: 20,
                }}>
                {page.label}
              </Link>
            ))}
          </Fragment>
        )}
      </Container>
    </NavbarWrapper>
  )
}
export default Navbar
const Separator = ({ color, background }: { color: string; background: string }) => (
  <SeparatorWrap sx={{ backgroundColor: background, height: 6 }}>
    <div sx={{ backgroundColor: color, height: 6, margin: '0 20px' }} />
  </SeparatorWrap>
)
const SeparatorWrap = styled.div`
  width: 100%;
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
const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  min-height: 50px;
  background-color: #fff;
`
const Container = styled.div`
  /* margin: 0 20px; */
  padding-left: 0px;
  padding-right: 10px;
  display: flex;
  height: 70px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`
