import * as React from 'react';
import Dot from './Dot';
export interface IAppProps {
    totalSlides: number;
    currentSlider: number;
    lastSlide: number;
    selectSlide: (arg:number)=> any;
}

export default function App ({totalSlides, currentSlider, lastSlide, selectSlide}: IAppProps) {
    return (
        <div className="cute_slider__overlay">
        <div className="cute_slider__dots">
          {Array.from(
            { length: totalSlides },
            (v, k) => k + 1
          ).map((slider, index) => {
            return (
              <Dot
                key={index}
                first={index === 0}
                last={index === lastSlide}
                active={index === currentSlider}
                activeSlider={currentSlider}
                setSlide={selectSlide}
                current={index}
              />
            );
          })}
        </div>
      </div>
    );
}
