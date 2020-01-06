/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import Data from '../data/global.json'
import logoLight from '../assets/images/logo_light.svg'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="px-6">
        <div className="border-celeste border-t-8">
          <img alt="Harta Serviciilor Sociale Logo" src={logoLight} className="pt-8" />
          <p className="text-snow text-xl pb-32 pt-8">
            este un proiect realizat de{' '}
            <a title={Data.footer.links.asociatia.title} href={Data.footer.links.asociatia.url}>
              {Data.footer.links.asociatia.text}
            </a>{' '}
            cu <br className="hidden sm:block" />
            sprijinul <a href="https://www.omvpetrom.com/ro">OMV Petrom</a> prin programul{' '}
            <a title="Țara lui Andrei" href="https://taraluiandrei.ro/">
              Țara lui Andrei
            </a>
            .
          </p>
          <nav className="hidden sm:block">
            <ul>
              <li>
                <Link title="Harta" to="…">
                  Harta
                </Link>
              </li>
              <li>
                <Link title="Harta" to="…">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link title="Harta" to="…">
                  Noutăți
                </Link>
              </li>
              <li>
                <Link title="Harta" to="…">
                  Parteneri
                </Link>
              </li>
              <li>
                <Link title="Harta" to="…">
                  Statistici
                </Link>
              </li>
              <li>
                <Link title="Harta" to="…">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <p className="border-brown border-t-2 text-center text-lightbrown py-2">
            {Data.footer.texts.copyright}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    )
  }
}
