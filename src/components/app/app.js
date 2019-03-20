import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import TodoFilter from '../todo-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    filterState: 'all',
    filterString: '',
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  onAddItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({todoData}) => {
      const newData = [...todoData, newItem];
      return { todoData: newData };
    });
  };

  toggleState = (id, stateName) => () => {
    this.setState(({todoData}) => {
      const newData = todoData.reduce((acc, item) => {
        if (id !== item.id) {
          return [...acc, item];
        }
        return [...acc, { ...item, [stateName]: !item[stateName] }];
      }, []);
      return { todoData: newData };
    });
  };

  deleteItem = (id) => () => {
    this.setState(({todoData}) => {
      const newData = todoData.filter(item => item.id !== id);
      return { todoData: newData };
    });
  };

  handleFilterState = (state) => () => {
    this.setState({ filterState: state });
  }

  updateFilter = (text) => {
    this.setState({ filterString: text });
  }
  
  filterMap = {
    active: ({done}) => !done,
    done: ({done}) => done,
  }

  render() {
    const { todoData, filterState, filterString } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    const items = filterState === 'all' ? todoData : todoData.filter(item => this.filterMap[filterState](item));
    
    const filterStringLength = filterString.length;
    const items2 = filterStringLength === 0 ? items : items.filter(({label}) => filterString === label.slice(0, filterStringLength).toLowerCase());

    return (
      <div className="todo-app">
        <AppHeader active={todoCount} finished={doneCount} />
        <TodoFilter updateFilter={this.updateFilter} toggleFilterState={this.handleFilterState} state={filterState}/>
        <TodoList items={items2} toggleState={this.toggleState} deleteItem={this.deleteItem} />
        <ItemAddForm addItem={this.onAddItem}/>
      </div>
    );
  }
};