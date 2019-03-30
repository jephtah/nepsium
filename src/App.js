import React, { Component, Fragment } from 'react';
import Header from "./components/header_footer/Header";
import Nexus from "./components/header_footer/Nexus";
import Presale from "./components/presale";
import Token from "./components/token";
import Roadmap from "./components/roadmap";
//import Exchange from "./components/exchange";
import InfoGrid from "./components/infogrid";
import Team from "./components/team";
import Slider from "./components/slider";
import Faq from "./components/faq";
import Footer from "./components/header_footer/Footer";

// CSS
import './styles/App.css';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Nexus />
        <Presale />
        <Token />
        <Roadmap />
        <InfoGrid />
        <Team />
        <Slider />
        <Faq />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
