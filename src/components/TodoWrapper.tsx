import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { useLocalStorage } from "../hooks/useLocalStorage";
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

  const { getItem, setItem } = useLocalStorage('todos');

  useEffect(() => {
    const storedTodos = getItem();
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (todo: string) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;

    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
      date: { day: currentDay, month: currentMonth },
    };

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      setItem(updatedTodos);
      return updatedTodos;
    });
  };

  const deleteTodo = (id: string) => {

    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      setItem(updatedTodos);
      return updatedTodos;
    });
  };

  const lineText = (el: TodoItem) => {

    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === el.id ? { ...todo, completed: !todo.completed } : todo
      );
      setItem(updatedTodos);
      return updatedTodos;
    });
  };

  return (
    <>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Todo key={index} task={todo} deleteTodo={deleteTodo} lineText={lineText} />
      ))}
    </>
  );
};
