import React from 'react';
import Slider from 'react-slick';

type Props = {
  children: object;
  settings: object;
};
function HsSlider(props: Props) {
  return <Slider {...props.settings}>{props.children}</Slider>;
}

export default HsSlider;
