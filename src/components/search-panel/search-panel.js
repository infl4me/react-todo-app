import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  render() {

    return (
      <div className="search-panel mr-2">
        <input className="form-control" type="text" placeholder="Type to search"/>
      </div>
    );
  }
}