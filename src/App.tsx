import React from 'react';
import Slider from './components/HomeSlider';
import Feature from './components/Feature';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Slider />
      <Feature />
      <Gallery />
      <Location />
      <Contact />
    </React.Fragment>
  );
}

export default App;
