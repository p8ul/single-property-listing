import * as React from "react";
import { IThumbnailProps } from "./types";

export default function App({ sliders, selectSlide, activeSlider }: IThumbnailProps) {
  return (
    <div className="flex _row thumbnail">
      {sliders.map((item, index) => {
        return (
          <div
            key={index}
            className="flex thumbnail__container"
            role="presentation"
            onClick={() => selectSlide(index)}
          >
            <img src={item.url}  alt="thumbnail" className={activeSlider === index ? "ui image active": "ui image"} />
          </div>
        );
      })}
    </div>
  );
}
