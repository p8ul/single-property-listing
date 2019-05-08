import * as React from "react";
export interface IFullSlideProps {
  image: any;
  onMouseEnter: () => any;
  onMouseOut: () => any;
  overlay?: () => any;
}
export default function App({
  image,
  onMouseEnter,
  onMouseOut,
  overlay
}: IFullSlideProps) {
  return (
    <div
      onMouseEnter={() => onMouseEnter()}
      onMouseOut={() => onMouseOut()}
      className="cute_slider__sliders__content"
    >
      <img alt="imagesource" src={image} className="ui image fluid" />
      {overlay}
    </div>
  );
}
