import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { SmokeNavbar } from './components';
import './SmokeApp.css';

const App = () => (
  <div>
    <SmokeNavbar />
    <Header />
    <div id="about">
      <AboutUs />
    </div>
    <SpecialMenu />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
