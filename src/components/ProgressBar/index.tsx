import React from 'react';
import siluette from '../../assets/images/siluette.svg';
type Props = {
  sqSize: number;
  shelters: number;
  skids: number;
  strokeWidth: number;
  class: string;
};

function ProgressBar(props: Props) {
  // Size of the enclosing square
  const sqSize = props.sqSize;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;

  return (
    <div className={`${props.class}`}>
      <div style={{ maxWidth: '320px' }} className="relative xl:m-auto">
        <img className="progressbar-image md:absolute" src={siluette} />
        <svg width={props.sqSize} height={props.sqSize} viewBox={viewBox} className="xl:m-auto">
          <line
            className="circle-background"
            y1="260"
            y2="260"
            x1="0"
            x2={props.skids}
            transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
            strokeWidth={`${props.strokeWidth}px`}
          />
          <line
            className="circle-progress"
            y1="165"
            y2="165"
            x1="0"
            x2={props.shelters}
            strokeWidth={`${props.strokeWidth}px`}
            transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
          />
          <text
            x="10%"
            y="55%"
            transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
            className="block text-xl text-black">
            pentru persoane fara adapost
          </text>
          <text
            x="10%"
            y="85%"
            transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
            className="block text-xl text-black">
            pentru copii
          </text>
        </svg>
        <svg width="295" height="8" viewBox="0 0 295 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto">
          <path d="M0.355103 4.22156H294.645" stroke="#968584" strokeWidth="7" strokeMiterlimit="10" />
        </svg>
      </div>
      <p className="circle-total pt-4">{`${props.shelters}`}</p>
      <p className="circle-total-amount">{`${props.skids}`}</p>
      <p className="circle-total pb-6">Centre servicii sociale</p>
    </div>
  );
}

ProgressBar.defaultProps = {
  sqSize: 310,
  shelters: 21,
  skids: 538,
  strokeWidth: 42,
};

export default ProgressBar;
