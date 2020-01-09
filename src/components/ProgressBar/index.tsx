import React from 'react'
import siluette from '../../assets/images/siluette.svg'

export default class ProgressBar extends React.Component {
  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`

    return (
      <div className={`${this.props.class}`}>
        <svg width={this.props.sqSize} height={this.props.sqSize} viewBox={viewBox}>
          <image height="100px" width="100px" src={siluette} />
          <line
            className="circle-background"
            y1="260"
            y2="260"
            x1="0"
            x2={this.props.copii}
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
            strokeWidth={`${this.props.strokeWidth}px`}
          />
          <line
            className="circle-progress"
            y1="165"
            y2="165"
            x1="0"
            x2={this.props.adapost}
            strokeWidth={`${this.props.strokeWidth}px`}
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
          />
          <text
            x="10%"
            y="55%"
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
            className="block text-xl text-black">
            pentru persoane fara adapost
          </text>
          <text
            x="10%"
            y="85%"
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
            className="block text-xl text-black">
            pentru copii
          </text>
        </svg>
        <svg width="295" height="8" viewBox="0 0 295 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto">
          <path d="M0.355103 4.22156H294.645" stroke="#968584" strokeWidth="7" strokeMiterlimit="10" />
        </svg>
        <p className="circle-total pt-4">{`${this.props.adapost}`}</p>
        <p className="circle-total-amount">{`${this.props.copii}`}</p>
        <p className="circle-total pb-6">Centre servicii sociale</p>
      </div>
    )
  }
}

ProgressBar.defaultProps = {
  sqSize: 310,
  adapost: 21,
  copii: 538,
  strokeWidth: 42,
}
