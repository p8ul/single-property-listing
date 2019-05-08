import * as React from "react";
export interface IFullSlideProps {
  image: any;
  onMouseEnter: () => any;
  onMouseOut: ()=> any;
  overlay?: () => any;
}
export default function App({image, onMouseEnter, onMouseOut, overlay}: IFullSlideProps) {
  return (
    <div
     onMouseEnter={()=> onMouseEnter()}
     onMouseOut={()=> onMouseOut()}
      style={{
        backgroundImage:
          "url(" +
          image +
          ") ",
        backgroundPosition: "40% 40%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: '80vh',
        backgroundAttachment: 'fixed-',
      }}
      className="cute_slider__sliders__content fixed "
    >
    {overlay}
      </div>
  );
}
