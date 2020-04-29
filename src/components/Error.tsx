import React from 'react';

const Error = (props) => (
  <div>
    {Object.entries(props).map(([err, val], index) => (
      <pre err={err} key={index}>
        {/* <strong>{err}: </strong> */}
        {JSON.stringify(val, '', ' ')}
      </pre>
    ))}
  </div>
);

export default Error;
