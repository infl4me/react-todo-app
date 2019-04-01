import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
  onChange = (event) => {
    const { value } = event.target;
    const { updateFilter } = this.props;
    updateFilter(value.toLowerCase());
  };

  render() {
    return (
      <div className="search-panel mr-2">
        <input onChange={this.onChange} className="form-control" type="text" placeholder="Type to search" />
      </div>
    );
  }
}
