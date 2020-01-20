import React from 'react';
import Slider from 'react-slick';

type Props = {
  children: object;
  settings: string;
};
function HsSlider(props: Props) {
  return (
    <Slider style={{ width: '88vw', margin: '0 auto' }} {...props.settings}>
      {props.children}
    </Slider>
  );
}

export default HsSlider;
