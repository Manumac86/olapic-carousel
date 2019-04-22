import React from "react";
import carouselPhoto from "../media/pic01.jpg";
import "./carousel-item.css";

class CarouselContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="Carousel-Container container-fluid">
          <h1>Carousel UI with React using Olapic API</h1>
          <div className="Carousel-Items-List row">
            <div className="Carousel-Item card">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 1"
              />
            </div>
            <div className="Carousel-Item card ">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 2"
              />
            </div>
            <div className="Carousel-Item card ">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 3"
              />
            </div>
            <div className="Carousel-Item card ">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 4"
              />
            </div>
            <div className="Carousel-Item card ">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 5"
              />
            </div>
            <div className="Carousel-Item card ">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 6"
              />
            </div>
            <div className="Carousel-Item card ">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 3"
              />
            </div>
            <div className="Carousel-Item card ">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 3"
              />
            </div>
            <div className="Carousel-Item card ">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 3"
              />
            </div>
            <div className="Carousel-Item card ">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 3"
              />
            </div>
            <div className="Carousel-Item card ">
              <img
                className="Carousel-Photo card-img"
                src={carouselPhoto}
                alt="olapic 3"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselContainer;
