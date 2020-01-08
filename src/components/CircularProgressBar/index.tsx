import React from 'react'

export default class CircularProgressBar extends React.Component {
  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2
    // Total Institutions
    const total = this.props.publice + this.props.private
    // Scale 100% coverage overlay with the actual percent of public
    const percentage = (this.props.publice * 100) / total
    // Offset
    const dashOffset = dashArray - (dashArray * percentage) / 100

    return (
      <div>
        <svg width={this.props.sqSize} height={this.props.sqSize} viewBox={viewBox}>
          <circle
            className="circle-background"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
          />
          <circle
            className="circle-progress"
            cx={this.props.sqSize / 2}
            cy={this.props.sqSize / 2}
            r={radius}
            strokeWidth={`${this.props.strokeWidth}px`}
            // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />
          <text className="circle-private" x="25%" y="45%" dy=".3em" textAnchor="middle">
            {`${this.props.private}`}
          </text>
          <text x="15%" y="55%" className="block text-xl text-black">
            private
          </text>
          <text className="circle-publice" x="75%" y="45%" dy=".3em" textAnchor="middle">
            {`${this.props.publice}`}
          </text>
          <text x="65%" y="55%" className="block text-xl text-black">
            publice
          </text>
        </svg>
        <svg
          width="272"
          height="67"
          viewBox="0 0 272 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-mt-10 m-auto">
          <path
            d="M2.92 2.58984C19.4702 21.6343 39.9151 36.9048 62.8735 47.3697C85.832 57.8345 110.769 63.2498 136 63.2498C161.231 63.2498 186.168 57.8345 209.126 47.3697C232.085 36.9048 252.53 21.6343 269.08 2.58984"
            stroke="#968584"
            strokeWidth="7"
            strokeMiterlimit="10"
          />
        </svg>
        <p className="circle-total pt-4">TOTAL</p>
        <p className="circle-total-amount">{`${total}`}</p>
        <p className="circle-total pb-6">Centre servicii sociale acreditate pe tot teritoriul țării</p>
      </div>
    )
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 310,
  publice: 1396,
  private: 1154,
  strokeWidth: 30,
}