import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import TodoFilter from '../todo-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      // id: this.maxId++
    }
  }

  render() {
    const { todoData } = this.state;
    const doneCount = todoData
                      .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader active={todoCount} finished={doneCount} />
        <TodoFilter />
        <TodoList items={todoData} />
        <ItemAddForm />
      </div>
    );
  }
};