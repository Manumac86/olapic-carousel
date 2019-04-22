import React, { Component } from "react";
import "./App.css";
import CarouselContainer from "./components/carousel-container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Carousel UI with React using{" "}
            <a
              href="http://apiv2-docs.photorank.me/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Olapic API
            </a>
          </h2>
        </header>
        <CarouselContainer />
      </div>
    );
  }
}

export default App;
