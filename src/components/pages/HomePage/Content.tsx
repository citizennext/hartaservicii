/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Îngrijim și suntem îngrijiți mai bine</h1>
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
        <div>Home Page Content</div>
        <br />
        <a href="/test">TEST</a>
      </div>
    )
  }
}
