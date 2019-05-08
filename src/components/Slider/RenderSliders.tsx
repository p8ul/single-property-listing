import * as React from "react";
import FullWidth, { IFullSlideProps } from "./FullWidth";
import FluidSlide from "./Fluid";

export type slideType = "full-width" | "fluid" | undefined;
export interface IAppProps {
  slideType: slideType;
}

const sliders = (props: IAppProps & IFullSlideProps) => {
  const { slideType, ...rest } = props;
  switch (slideType) {
    case "full-width":
      return <FullWidth {...rest} />;
    case "fluid":
      return <FluidSlide {...rest} />;

    default:
      return <div />;
  }
};

export default function App(props: IAppProps & IFullSlideProps) {
  return <div>{sliders(props)}</div>;
}
