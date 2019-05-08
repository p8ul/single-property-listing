import * as React from "react";
import DotLinks from "./DotsLinks";
import ArrowLinks from "./ArrowLinks";
import RenderSliders from "./RenderSliders";
import Thumbnail from './Thumbnail';
import { ISliderProps } from "./types";


export default class App extends React.Component<ISliderProps, any> {
  state = {
    currentSlider: 0,
    interval: 3000,
    slideInterval: 1,
    showArrows: true,
    isString: false
  };

  componentDidMount() {
    const { interval } = this.props;
    this.setState({
      slideInterval: setInterval(this.nextSlide, interval)
    });
  }

  setSlide = (slide: number) => {
    this.setState({ currentSlider: slide });
  };

  resetInterval = (newInterval: number) => {
    const { slideInterval } = this.state;
    clearInterval(slideInterval);
    this.setState({
      slideInterval: setInterval(this.nextSlide, newInterval)
    });
  };

  nextSlide = () => {
    const { currentSlider } = this.state;
    const { sliderComponents } = this.props;
    let slide = currentSlider + 1;
    if (slide === sliderComponents.length) {
      slide = 0;
    }
    this.setState({ currentSlider: slide });
  };

  prevSlide = () => {
    const { currentSlider } = this.state;
    const { sliderComponents } = this.props;
    let slide = currentSlider - 1;
    if (slide < 0) {
      slide = sliderComponents.length - 1;
    }
    this.setState({ currentSlider: slide });
  };

  onMouseEnter = () => {
    this.resetInterval(1000000);
    this.setState({ showArrows: true });
  };

  onMouseOut = () => {
    const { interval } = this.props;
    this.resetInterval(interval);
    this.setState({ showArrows: false });
  };
  static defaultProps = {
    wrapperClassName: "cute_slider",
    slidersClassName: "cute_slider__sliders",
    slideType: "full-width",
    showThumbnail: false
  };

  public render() {
    const { currentSlider, showArrows } = this.state;
    const {
      sliderComponents,
      slidersClassName,
      wrapperClassName,
      slideType,
      showThumbnail
    } = this.props;

    return (
        // @ts-ignore:
      <div className={wrapperClassName +' ' + slideType}>
        <div className={slidersClassName}>
          <RenderSliders
            image={sliderComponents[currentSlider].url}
            // @ts-ignore:
            overlay={sliderComponents[currentSlider].overlayNode}
            onMouseEnter={this.onMouseEnter}
            onMouseOut={this.onMouseOut}
            slideType={slideType}
          />
        </div>
        {!showThumbnail && <DotLinks
          currentSlider={currentSlider}
          totalSlides={sliderComponents.length}
          selectSlide={this.setSlide}
          lastSlide={sliderComponents.length - 1}
        />}
        {showThumbnail && <Thumbnail 
        selectSlide={this.setSlide}
        activeSlider={currentSlider} 
        sliders={sliderComponents}/>}
        <ArrowLinks
          showArrows={showArrows}
          goToNextSlide={this.nextSlide}
          goToPrevSlide={this.nextSlide}
        />
      </div>
    );
  }
}
