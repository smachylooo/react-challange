import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        required
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};
