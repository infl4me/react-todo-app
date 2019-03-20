import React, { Component } from 'react';
import cn from 'classnames';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  filters = [{ name: 'all', value: 'All' }, { name: 'active', value: 'Active' }, { name: 'done', value: 'Done' },]

  render() {
    const { toggleState, state } = this.props;
    const buttons = this.filters.map(({ name, value }) => {
      const isActive = name === state;
      const classes = cn({
        'btn': true,
        'btn-primary': isActive,
        'btn-outline-secondary': !isActive,
      });
      return (
        <button key={name}
                type="button"
                onClick={toggleState(name)}
                className={classes}>{value}</button>
      );
    });
    return (
      <div className="btn-group">{buttons}</div>
    );
  }
}