/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
// @todo st3phan - it must import on common and fixed validation
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Data from '../../../data/global.json'

export default class Content extends React.Component {
  // constructor (props) {
  //     super(props);
  //     this.data = Data.pages.test
  // }

  render() {
    return (
      <div>
        <h1>H1 Title</h1>
        <br />
        <h2>H2 Title</h2>
        <br />
        <h3>H3 Title</h3>
        <br />
        <h4>H4 Title</h4>
        <br />
        <p>Paragraph</p>
        <br />
        <p className="notes">Notes</p>
        <br />
        <a className="mini">a mini</a>
        <br />
        <button>Button</button>
        <br />
        <button className="social">Button</button>
        <br />
        <button className="small">Small Button</button>
        <div>{Data.page.test.content}</div>
        <br />
        <a href={Data.page.test.links.homepage.url} title={Data.page.test.links.homepage.title}>
          {Data.page.test.links.homepage.label}
        </a>
      </div>
    )
  }
}
