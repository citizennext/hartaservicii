import React from 'react';
import siluette from '../../assets/images/siluette.svg';
type Props = {
  sqSize: number;
  firstBar: number;
  secondBar: number;
  strokeWidth: number;
  classProgressBar: string;
};

function ProgressBar(props: Props) {
  // Size of the enclosing square
  const sqSize = props.sqSize;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`;

  return (
    <div className={`progress-bar ${props.classProgressBar}`}>
      <div className="relative m-auto">
        <img className="progressbar-image absolute" src={siluette} alt="Social Worker Icon" />
        <svg width={props.sqSize} height={props.sqSize} viewBox={viewBox} className="xl:m-auto">
          <line
            className="circle-background"
            y1="260"
            y2="260"
            x1="0"
            x2={props.secondBar}
            transform={`rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`}
            strokeWidth={`${props.strokeWidth}px`}
          />
          <line
            className="circle-progress"
            y1="165"
            y2="165"
            x1="0"
            x2={props.firstBar}
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
      <p className="progress-first-amount">{`${props.firstBar}`}</p>
      <p className="progress-second-amount">{`${props.secondBar}`}</p>
      <p className="progress-copy">Centre servicii sociale</p>
    </div>
  );
}

ProgressBar.defaultProps = {
  sqSize: 310,
  firstBar: 21,
  secondBar: 538,
  strokeWidth: 42,
  classProgressBar: '',
};

export default ProgressBar;
