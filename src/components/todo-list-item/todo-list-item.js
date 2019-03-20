import React, { Component } from 'react';
import cn from 'classnames';
import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {
    const { label, id, done, important, toggleState, deleteItem } = this.props;
    const textClasses = cn({
      'todo-list-text': true,
      'todo-list-text--finished': done,
      'todo-list-text--important': important,
    });
    return (
      <li className="list-group-item d-flex todo-list-item">
        <span onClick={toggleState(id, 'done')} className={textClasses}>{label}</span>
        <div className="todo-list-item__btns d-flex">
          <button onClick={deleteItem(id)} className="btn btn-outline-danger btn-sm mr-2">
            <span className="fa fa-trash-o"></span>
          </button>
          <button onClick={toggleState(id, 'important')} className="btn btn-outline-success btn-sm">
            <span className="fa fa-exclamation"></span>
          </button>
        </div>
      </li>
    );
  }
}