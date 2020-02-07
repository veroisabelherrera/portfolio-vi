import React, { Component } from "react";
import Slider from "react-slick";
import { Intro } from "./Intro";
import { AboutDev } from "./AboutDev";
import { SkillsDev } from "./SkillsDev";
import { Contact } from "./Contact";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
    };

    return (
      <div className="slide-container">
        <Slider {...settings}>
          <div className="intro-container">
            <Intro />
          </div>
          <div className="about-container">
            <AboutDev />
          </div>
          <div className="skills-container">
            <SkillsDev />
          </div>
          <div className="about-container">
            <Contact />
          </div>
        </Slider>
      </div>
    );
  }
}