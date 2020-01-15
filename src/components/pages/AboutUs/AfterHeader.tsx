import React from 'react';

type Props = {
  header: object;
};

export function AfterHeader({ header }: Props) {
  return (
    <div className="page-header">
      <div className="wrapper">
        <span>{header}</span>
      </div>
    </div>
  );
}
