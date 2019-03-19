import React, { Component } from 'react';

export default class AppHeader extends Component {

  render() {
    const { active, finished } = this.props;
    const text = `${active} to do, ${finished} done`;

    return(
      <div>
        <h1>Todo list</h1>
        <span>{text}</span>
      </div>
    );
  }
}