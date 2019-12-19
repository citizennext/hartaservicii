/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
// @todo st3phan - it must import on common and fixed validation
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Data from '../../../data/global'

export default class Content extends React.Component {
  // constructor (props) {
  //     super(props);
  //     this.data = Data.pages.test
  // }

  render() {
    return (
      <div>
        <div>{Data.pages.test.content}</div>
        <br />
        <a href={Data.pages.test.links.homepage.url} title={Data.pages.test.links.homepage.title}>
          {Data.pages.test.links.homepage.label}
        </a>
      </div>
    )
  }
}
