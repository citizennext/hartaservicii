/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import logoLight from '../assets/images/logo_light.svg'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src={logoLight} />
        <p>
          este un proiect realizat de <a href="https://citizennext.ro/contribute">Asociația Citizen Next</a> cu
        </p>
        <p>
          sprijinul <a href="https://www.omvpetrom.com/ro">OMV Petrom</a> prin programul{' '}
          <a href="https://taraluiandrei.ro/">Țara lui Andrei</a>.
        </p>

        <ul>
          <li>
            <a href="…">Harta</a>
          </li>
          <li>
            <a href="…">Despre noi</a>
          </li>
          <li>
            <a href="…">Noutăți</a>
          </li>
          <li>
            <a href="…">Parteneri</a>
          </li>
          <li>
            <a href="…">Statistici</a>
          </li>
          <li>
            <a href="…">Contact</a>
          </li>
        </ul>

        <p>Asociația Citizen Next — toate drepturile rezervate © {new Date().getFullYear()}</p>
      </footer>
    )
  }
}
