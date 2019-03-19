import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    const { label } = this.props;

    return (
      <li className="list-group-item d-flex todo-list-item">
        <span className="todo-list-text">{label}</span>
        <div className="todo-list-item-btns">
          <button className="btn btn-outline-danger btn-sm mr-2">
            <span className="fa fa-trash-o"></span>
          </button>
          <button className="btn btn-outline-success btn-sm">
            <span className="fa fa-exclamation"></span>
          </button>
        </div>
      </li>
    );
  }
}