import React from "react";
import {Router} from "react-router-dom";
import history from "./browser-history";
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import Popup from "./components/popup/popup";

function App() {
  return (
    <div className="wrapper">
      <Router history={history}>
        <Header />
        <Slider />
        <Menu />
        <Footer />
        <Popup />
      </Router>
    </div>
  );
}

export default App;


