import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoProps {
  task: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
    date: {
      day: number;
      month: number;
    };
  };
  deleteTodo: (id: string) => void;
  lineText: (el: any) => void;
}

export const Todo: React.FC<TodoProps> = ({ task, deleteTodo, lineText }) => {
  return (
    <div className="d-flex todo-item">
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        <span>{task.task} -- {task.date.day}/{task.date.month}</span>
        <div>
      {task.completed ? (
        <FontAwesomeIcon
          className="border"
          icon={faCheck}
          onClick={() => lineText(task)}
        />
      ) : (
        <FontAwesomeIcon
          className="border"
          icon={faTimes}
          onClick={() => lineText(task)}
        />
      )}
      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
      </p>
    </div>
  );
};
