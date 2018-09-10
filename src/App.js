import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SECTIONS from './dataSections';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
      scrolling: false,
    };
    this.getClassNameForSection = this.getClassNameForSection.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener('wheel', (evt) => {
      if (this.state.scrolling) {
        return;
      }

      if (evt.deltaY > 0) {
        this.scrollDown();
      }
      if (evt.deltaY < 0) {
        this.scrollUp();
      }
    });
  }
  scrollUp() {
    if (this.state.currentSlide <= 0) {
      return;
    }
    this.setState({ currentSlide: this.state.currentSlide - 1, scrolling: true, });
    setTimeout(() => this.setState({ scrolling: false }), 300);
  }
  scrollDown() {
    if (this.state.currentSlide >= Math.max(...SECTIONS.map(s => s.endSlide))) {
      return;
    }
    this.setState({ currentSlide: this.state.currentSlide + 1, scrolling: true, });
    setTimeout(() => this.setState({ scrolling: false }), 300);
  }
  getClassNameForSection(section) {
    if (this.state.currentSlide < section.startSlide) {
      return 'section-scroll-below';
    }
    if (this.state.currentSlide > section.endSlide) {
      return 'section-scroll-above';
    }
    return 'section-scroll-inside';
  }
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <button onClick={this.scrollUp}>Up</button>
          <button onClick={this.scrollDown}>Down</button>
        </div>
        <div className="content">
          {SECTIONS.map(section => (
            <div
              key={section.id}
              className={`
                section
                section-${section.position}
                ${this.getClassNameForSection(section)}
              `}
              style={{backgroundColor: section.bgColor}}
            >{section.content}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
