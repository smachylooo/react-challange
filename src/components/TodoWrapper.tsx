import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoFrom";


interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
  date: {
    day: number;
    month: number;
  };
}

export const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: string) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
        date: { day: currentDay, month: currentMonth },
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const lineText = (el: TodoItem) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === el.id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} task={todo} deleteTodo={deleteTodo} lineText={lineText} />
      ))}
    </>
  );
};
