import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();

    this.state = {
      listItems: [
        "incorporate a css library? tailwind?",
        "make a layout component",
        "make some sidebar navigation component",
        "do something with routing, is that possible with gh-pages?",
        "make it play sounds",
        "interactive meditation timer - several sounds to choose from, define timings"
      ]
      }
  }
  
  render() {
    return (
      <div class="list-component">
        <h3>A list of things</h3>
        <ol>
          {this.state.listItems.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    )
  }
}

export default List;
