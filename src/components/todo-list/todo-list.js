import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({ items, ...handlers }) => {
  const elements = items.map(item => <TodoListItem key={item.id} {...item} {...handlers} />);

  return (
    <ul className="list-group mt-3">
      {elements}
    </ul>
  );
};

export default TodoList;
