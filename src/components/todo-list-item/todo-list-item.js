import React from 'react';
import cn from 'classnames';
import './todo-list-item.css';

const TodoListItem = (props) => {
  const {
    label, id, done, important, toggleState, deleteItem,
  } = props;
  const textClasses = cn({
    'todo-list-text': true,
    'todo-list-text--finished': done,
    'todo-list-text--important': important,
  });
  return (
    <li className="list-group-item d-flex todo-list-item">
      <button className="todo-list-item__btn" type="button" onClick={toggleState(id, 'done')}>
        <span className={textClasses}>{label}</span>
      </button>
      <div className="todo-list-item__btns d-flex">
        <button type="button" onClick={deleteItem(id)} className="btn btn-outline-danger btn-sm mr-2">
          <span className="fa fa-trash-o" />
        </button>
        <button type="button" onClick={toggleState(id, 'important')} className="btn btn-outline-success btn-sm">
          <span className="fa fa-exclamation" />
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
