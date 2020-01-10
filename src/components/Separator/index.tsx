import React from 'react';

type Props = {
  color: string;
  classSeparator: string;
  button: string;
  top: string;
  height: string;
};
{
  /*@todo Seco -> it must be redeclare to Separator parameters*/
}

function Separator(props: Props) {
  return (
    <div
      className={`${props.classSeparator} separator bg-${props.color} h-${props.height}`}
      style={{ bottom: props.bottom, top: props.top }}></div>
  );
}

Separator.defaultProps = {
  classSeparator: '',
  height: 's',
  width: '100%',
  color: 'black',
  bottom: '',
  top: '',
};

export default Separator;
