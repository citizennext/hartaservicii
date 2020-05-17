import React from 'react';

export function Ripple() {
  return (
    <div className="flex align-middle justify-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
