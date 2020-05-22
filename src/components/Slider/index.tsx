import React, { ReactNode } from 'react';
// @ts-ignore
import Slider from 'react-slick';

type Props = {
  children: ReactNode;
  settings: any;
};
function HsSlider(props: Props) {
  return <Slider {...props.settings}>{props.children}</Slider>;
}

export default HsSlider;
