import * as React from "react";
import Arrow from "./Arrow";

export interface IAppProps {
  showArrows: boolean;
  goToNextSlide: () => any;
  goToPrevSlide: () => any;
}

export default function App({ showArrows, goToNextSlide, goToPrevSlide }: IAppProps) {
  return (
    <React.Fragment>
      <Arrow
        className={showArrows ? "arrow next active" : "arrow next"}
        onClick={goToNextSlide}
      />
      <Arrow
        className={showArrows ? "arrow previous active" : "arrow previous"}
        onClick={goToPrevSlide}
      />
    </React.Fragment>
  );
}
