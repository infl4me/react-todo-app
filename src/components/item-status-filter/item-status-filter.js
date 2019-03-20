import React, { Component } from 'react';
import cn from 'classnames';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  getClasses = (type) => {
    const { state } = this.props;
    return cn({
      'btn': true,
      'btn-primary': state === type,
      'btn-outline-secondary': state !== type,
    })
  };

  render() {
    const { toggleState } = this.props;

    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" onClick={toggleState('all')} className={this.getClasses('all')}>All</button>
        <button type="button" onClick={toggleState('active')} className={this.getClasses('active')}>Active</button>
        <button type="button" onClick={toggleState('done')} className={this.getClasses('done')}>Done</button>
      </div>
    );
  }
}