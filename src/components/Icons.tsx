import React from 'react';

const Menu = (props: any) => (
  <svg width={props.size} height={props.size} viewBox="0 0 20 18" {...props}>
    <title>{'icon menu mobile'}</title>
    <g id="prefix__Layer_2" data-name="Layer 2">
      <g id="prefix__Layer_1-2" data-name="Layer 1" fill="currentColor">
        <rect x={11} y={-6} width={3} height={15} rx={1.5} transform="rotate(-90 12.5 1.5)" />
        <rect x={8.5} y={-1} width={3} height={20} rx={1.5} transform="rotate(-90 10 9)" />
        <rect x={9.5} y={7.5} width={3} height={18} rx={1.5} transform="rotate(-90 11 16.5)" />
      </g>
    </g>
  </svg>
);

const Close = (props: any) => (
  <svg
    width={props.size}
    height={props.size}
    {...props}
    viewBox="0 0 17 17"
    strokeLinecap="round"
    strokeMiterlimit={10}
    strokeWidth={2}>
    <title>{'icon close'}</title>
    <path d="M1 1l15 15M16 1L1 16" stroke="currentColor" fill="currentColor" />
  </svg>
);

export { Menu, Close };
