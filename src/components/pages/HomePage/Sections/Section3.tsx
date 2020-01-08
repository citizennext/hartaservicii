import React from 'react'
import CircularProgressBar from '../../../CircularProgressBar'
// import ProgressBar from '../../../ProgressBar'

export default class Content extends React.Component {
  render() {
    return (
      <div id="section3" className="section circularprogressbar">
        <div className="interior bg-snow py-8 mb-16">
          <CircularProgressBar public={1396} private={1154} />
          {/* <ProgressBar adapost={21} copii={538} /> */}
          <button className="my-1 absolute">Toate statisticile</button>
        </div>
      </div>
    )
  }
}
