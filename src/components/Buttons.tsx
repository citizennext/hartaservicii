import React from 'react';
interface Props {
  action?: () => void;
  label?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  arrow?: boolean;
  full?: boolean;
  className?: string;
  children: JSX.Element | string | JSX.Element[] | string[];
}

function Button(props: Props) {
  return <button {...props} onClick={props.action} className={`btn ${props.className}`} />;
}
export { Button };
