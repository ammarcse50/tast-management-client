import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const AllTask = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetch("task.json")
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, []);


  const calculateProgress = ()=>{
        
    const completedTask = task.filter(task=> task.completed).length;

      const totaltask= task.length;

      return (completedTask/ totaltask) *100;

}
  return (
    <div className="p-5">
      <h2>All Task</h2>
      <progress
        className="progress progress-secondary w-56"
        value={calculateProgress}
        max="100"
      ></progress>
      <div className="grid md:grid-cols-3   gap-5 ">
        {" "}
        {task.map((data) => (
          <TaskCard
            key={data.id}
            task={task}
            setTask={setTask}
            data={data}
          ></TaskCard>
        ))}{" "}
      </div>
    </div>
  );
};

export default AllTask;
