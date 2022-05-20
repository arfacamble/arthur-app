import './NavBar.scss';
import React, { Component } from 'react';
import NavBarItem from './NavBarItem.js';

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      navBarOptions: [
        { symbol: "bla", id: "thing", title: "to-do" },
        { symbol: "meditation", id: "meditation", title: "meditation" },
        { symbol: "interactive", id: "interactive", title: "interactive" },
        { symbol: "pictures", id: "pictures", title: "pictures" },
        { symbol: "anything", id: "anything", title: "anything" },
      ]
      }
  }
  
  render() {
    return (
      <div class="nav-bar-container">
        {this.state.navBarOptions.map((option) => (
          <NavBarItem symbol={option.symbol} id={option.id} title={option.title} />
        ))}
      </div>
    )
  }
}

export default NavBar;
