import React from 'react'
import 'typeface-montserrat'
import 'typeface-koho'

const Layout: React.FC<{ location?: any }> = ({ children, location }) => (
  <>
    <div>
      <nav>navigation</nav>
      {children}
    </div>
    <div id="overlay-root" />
  </>
)
export default Layout
