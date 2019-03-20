import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';

export default class TodoList extends Component {

  render() {
    const { items, ...handlers } = this.props;
    const elements = items.map(item => <TodoListItem key={item.id} { ...item } { ...handlers } />)

    return (
      <ul className="list-group mt-3">
        {elements}
      </ul>
    );
  }
}