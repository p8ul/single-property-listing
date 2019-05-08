import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Heading from '../common/Heading';

interface IProps {}
class SimpleMap extends Component<IProps> {
  static defaultProps = {};

  render() {
    return (
      // Important! Always set the container height explicitly
      <Container fluid className="dull-white" id="location">
      <Heading title={"Location"} subtitle="Our location" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6130.102749336148!2d36.92154182505614!3d-1.3692051577650821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d05b6efc68b%3A0x3154f3de55a05120!2sGreen+City+Gardens!5e0!3m2!1sen!2ske!4v1557485660017!5m2!1sen!2ske"
          width="100%"
          height="450"
          title="location"
          frameBorder={0}
          allowFullScreen={true}
        />
      </Container>
    );
  }
}

export default SimpleMap;
