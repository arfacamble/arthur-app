import './NavBar.scss';
import React, { Component } from 'react';

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      navBarOptions: [
        { symbol: "bla", id: "thing" },
        { symbol: "meditation", id: "meditation" },
      ]
      }
  }
  
  render() {
    return (
      <div class="nav-bar-container">
      </div>
    )
  }
}

export default NavBar;
