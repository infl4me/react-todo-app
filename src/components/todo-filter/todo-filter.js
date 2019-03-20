import React, { Component } from 'react';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

export default class TodoFilter extends Component {
  render() {
    const { toggleFilterState, state, updateFilter } = this.props;

    return (
      <div className="d-flex mt-3">
        <SearchPanel updateFilter={updateFilter}/>
        <ItemStatusFilter state={state} toggleState={toggleFilterState}/>
      </div>
    );
  }
}