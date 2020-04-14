import React from 'react';

export function Spinner() {
  return (
    <>
      <div className="cssload-overlay"></div>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
