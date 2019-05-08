import * as React from "react";
import Slider from "../Slider/Slider";
import { Container } from "semantic-ui-react";
import Heading from "../common/Heading";

export interface IAppProps {}

const sliderComponents = [
  {
    url:
      "https://kastell.mikado-themes.com/wp-content/uploads/2017/11/map-gallery-img-4.jpg"
  },
  {
    url:
      "http://modern.realhomes.io/wp-content/uploads/2017/06/drawing-room.jpg"
  },
  {
    url:
      "https://kastell.mikado-themes.com/wp-content/uploads/2017/11/map-gallery-img-2.jpg"
  },
  {
    url:
      "https://kastell.mikado-themes.com/wp-content/uploads/2017/11/map-gallery-img-4.jpg"
  },
  {
    url:
      "http://modern.realhomes.io/wp-content/uploads/2017/06/drawing-room.jpg"
  },
  {
    url:
      "https://kastell.mikado-themes.com/wp-content/uploads/2017/11/map-gallery-img-4.jpg"
  },
  {
    url:
      "http://modern.realhomes.io/wp-content/uploads/2017/06/drawing-room.jpg"
  },
  {
    url:
      "https://kastell.mikado-themes.com/wp-content/uploads/2017/11/map-gallery-img-4.jpg"
  },
  {
    url:
      "http://modern.realhomes.io/wp-content/uploads/2017/06/drawing-room.jpg"
  }
];
export default function HomeSlider(props: IAppProps) {
  return (
    <Container id="gallery">
      <Heading title={"Gallery"} subtitle="Our gallery" />
      <Slider
        sliderComponents={sliderComponents}
        interval={5000}
        slideType="fluid"
        showThumbnail
      />
    </Container>
  );
}
