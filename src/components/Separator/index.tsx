import React from 'react';

export default class Separator extends React.Component {
  render() {
    return (
      <div
        className={`${this.props.class} separator bg-${this.props.color} h-${this.props.height}`}
        style={{ bottom: this.props.bottom, top: this.props.top }}></div>
    );
  }
}

Separator.defaultProps = {
  class: '',
  height: 's',
  width: '100%',
  color: 'black',
  bottom: '',
  top: '',
};
