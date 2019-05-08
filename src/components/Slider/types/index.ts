export type slideType = "full-width" | "fluid";
export interface IsliderImage {
  url?: string;
  overlayNode?: React.ReactNode;
}
export interface ISliderProps {
  sliderComponents: Array<IsliderImage>;
  interval: number;
  wrapperClassName?: string;
  slidersClassName?: string;
  slideType?: slideType;
  showThumbnail?: boolean;
}

export interface IThumbnailProps {
    activeSlider: number;
    sliders: Array<any>;
    selectSlide: (arg: number) => any;
  }
