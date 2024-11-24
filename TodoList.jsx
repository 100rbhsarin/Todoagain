import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ task, checked, onHandleDeleteTodo, onHandleCheckedTodo  }) => {
  return (
    <li className="todo-item">
      <span className={checked?"checkList":"notCheckList"}>{task}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(task) }>
        <MdCheck/>
      </button>

      {/* Call handleDeleteTodo with the task data */}
      <button
        className="delete-btn"
        onClick={() => onHandleDeleteTodo(task)}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};


