import React from 'react';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

const TodoFilter = ({ toggleFilterState, state, updateFilter }) => (
  <div className="d-flex mt-3">
    <SearchPanel updateFilter={updateFilter} />
    <ItemStatusFilter state={state} toggleState={toggleFilterState} />
  </div>
);

export default TodoFilter;
