import React, { Component } from 'react';

export default class TodoListItem extends Component {
  render() {
    const { label } = this.props;

    return (
      <li>
        {label}
        <div>
          <button className="btn btn-outline-success btn-sm">
            <span className="fa fa-exclamation"></span>
          </button>
          <button className="btn btn-outline-danger btn-sm">
            <span className="fa fa-trash-o"></span>
          </button>
        </div>
      </li>
    );
  }
}