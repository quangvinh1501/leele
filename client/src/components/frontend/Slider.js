import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "./css/slider.css";
const Slider = () => {
  return (
    <div className="slider-container">
      <AwesomeSlider>
        <div data-src="../../../slider/4.jpg" />
        <div data-src="../../../slider/3.jpg" />
        <div data-src="../../../slider/2.jpg" />
        <div data-src="../../../slider/1.jpg" />
      </AwesomeSlider>
    </div>
  );
};
export default Slider;
