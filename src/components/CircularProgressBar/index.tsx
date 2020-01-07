import React from 'react'

export default class CircularProgressBar extends React.Component {
  //constructor(props) {
  //    super(props);
  //    this.state = {};
  //}

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
          <text className="circle-private" x="20%" y="50%" dy=".3em" textAnchor="middle">
            {`${this.props.private}`} private
          </text>
          <text className="circle-publice" x="80%" y="50%" dy=".3em" textAnchor="middle">
            {`${this.props.publice}`} publice
          </text>
        </svg>
        <p className="circle-publice"> Total {`${total}`} Centre servicii sociale acreditate pe tot teritoriul țării</p>
      </div>
    )
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 200,
  publice: 1396,
  private: 1154,
  strokeWidth: 30,
}
