import React, { Component } from 'react';
import './app-header.css';

export default class AppHeader extends Component {

  render() {
    const { active, finished } = this.props;
    const text = `${active} more to do, ${finished} done`;

    return(
      <div className="d-flex app-header">
        <h1>Todo list</h1>
        <span>{text}</span>
      </div>
    );
  }
}