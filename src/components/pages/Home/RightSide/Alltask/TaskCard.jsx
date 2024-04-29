import React from "react";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const TaskCard = ({ data, task, setTask }) => {
  const { id, title, description } = data;

  const toggleTaskCompletion = (taskId) => {
    setTask(
      task.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
      })
    );
  };

  return (
    <div className="card lg:w-96 px-6   bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>

        <div className="flex items-center gap-2">
          <div
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => toggleTaskCompletion(data.id)}
          >
            {data.completed ? "Mark Incomplete" : "Mark Complete"}
          </div>

          <div className="flex">
            <span>
              <MdDeleteForever className="text-[#e74308] text-4xl "/>
            </span>
            <span>
              <FaPen className="mt-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
