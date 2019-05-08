import * as React from "react";
import Slider from "../Slider/Slider";
import { Icon } from "semantic-ui-react";
export interface IAppProps {}

const overlay = () => (
  <div className="summary">
    <div className="summary__wrap">
      <h1>One Syokimau</h1>
      <h3 >
        <span className="playfair">From</span>
        <span className="fg-orange"> KES 3,000,000</span>
     
      </h3>
      <p>Remarkable 1 bedroom home located in Syokimau Machakos, Kenya</p>
      <div className="flex _row space-between">
        <div className="flex _column align-center">
          <span>Bedroom</span>
          <Icon name="bed" size="big" color="orange" />
          <span>1</span>
        </div>
        <div className="flex _column align-center">
          <span>Bathrooms</span>
          <Icon name="shower" size="big" color="orange" />
          <span>1</span>
        </div>
        <div className="flex _column align-center">
          <span>Area</span>
          <Icon name="area chart" size="big" color="orange" />
          <span>4,321 sq</span>
        </div>
      </div>
    </div>
  </div>
);

const sliderComponents = [
  {
    url: "http://modern.realhomes.io/wp-content/uploads/2017/06/slide-one.jpg",
    overlayNode: overlay()
  },
  {
      url: "http://modern.realhomes.io/wp-content/uploads/2017/06/slide-two.jpg",     
      overlayNode: overlay()
  }, 
  {
      url: "http://modern.realhomes.io/wp-content/uploads/2015/07/property-05-exterior.jpg",
      overlayNode: overlay()
  }
];
export default function HomeSlider(props: IAppProps) {
  return (
    <div id='home'>
      <Slider slideType="full-width" sliderComponents={sliderComponents} interval={5000} />
    </div>
  );
}
