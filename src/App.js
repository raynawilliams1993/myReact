import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import navigate from "./components/navigate/navigate";
import Wrapper from "./client/components/wrapper/wrapper";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Portfolio from "./components/pages/portfolio";
// import LandingPage from "./client/components/landingPage/landingPage";
import Footer from "./components/footer/footer";


function App() {
  return (

    <Router>
      <div className="App">
        <navigate />

        <Wrapper>
          {/* <Route path="/" render={() => <LandingPage />} exact /> */}
          <Route path="/" render={() => <About />} exact />
          <Route path="/contact" render={() => <Contact />} exact />
          <Route path="/portfolio" render={() => <Portfolio />} exact />

        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}



export default App;