import * as React from "react";

export interface IAppProps {
  current: number;
  active: boolean;
  first: boolean;
  last?: boolean;
  activeSlider: number;
  setSlide: (arg: number) => any;
}

export const Dot = ({
  current,
  active,
  first,
  last,
  activeSlider,
  setSlide
}: IAppProps) => {
  return (
    <div className="cute_slider__dots__container flex __row align-center">
      {!first && (
        <React.Fragment>
        <div
          className={
            current < activeSlider || current === activeSlider
              ? "cute_slider__dots__dot__line active"
              : "cute_slider__dots__dot__line"
          }
        />

        <div
          className={
            current < activeSlider || current === activeSlider
              ? "cute_slider__dots__dot__line_overlay active"
              : "cute_slider__dots__dot__line_overlay"
          }
        />
        </React.Fragment>
      )}
      <div className={active ? "dots active" : ""}>
        <div
          onClick={() => setSlide(current)}
          className={
            active || current < activeSlider || current === activeSlider
              ? "cute_slider__dots__dot active"
              : "cute_slider__dots__dot"
          }
        />
      </div>
    </div>
  );
};

export default Dot;
