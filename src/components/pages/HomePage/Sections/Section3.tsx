import React from 'react'
import CircularProgressBar from '../../../CircularProgressBar'
import ProgressBar from '../../../ProgressBar'

export default class Content extends React.Component {
  render() {
    return (
      <div id="section3" className="section circularprogressbar">
        <div className="interior bg-snow py-8 mb-16">
          <div className="md:flex">
            <CircularProgressBar class="md:w-1/2" publice={1396} private={1154} />
            <ProgressBar class="md:w-1/2" adapost={21} copii={538} />
          </div>
          <button className="my-1 absolute md:left-1/4">Toate statisticile</button>
        </div>
      </div>
    )
  }
}
