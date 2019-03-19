import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';

export default class TodoList extends Component {

  render() {
    const { items } = this.props;
    const elements = items.map(item => <TodoListItem { ...item } />)

    return (
      <ul>
        {elements}
      </ul>
    );
  }
}