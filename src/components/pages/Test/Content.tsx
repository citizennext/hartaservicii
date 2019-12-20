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
        <div>{Data.page.test.content}</div>
        <br />
        <a href={Data.page.test.links.homepage.url} title={Data.page.test.links.homepage.title}>
          {Data.page.test.links.homepage.label}
        </a>
      </div>
    )
  }
}
