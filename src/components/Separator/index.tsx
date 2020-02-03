import React from 'react';

type Props = {
  color: string;
  classSeparator: string;
  bottom: string;
  top: string;
  height: string;
  width: string;
};

function Separator(props: Props) {
  return (
    <div
      className={`${props.classSeparator} separator bg-${props.color} h-${props.height}`}
      style={{ bottom: props.bottom, top: props.top, width: props.width }}></div>
  );
}

Separator.defaultProps = {
  classSeparator: '',
  height: 's',
  width: '',
  color: 'black',
  bottom: '',
  top: '',
};

export default Separator;
