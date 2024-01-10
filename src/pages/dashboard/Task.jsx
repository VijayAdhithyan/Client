import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const user = useSelector((state) => state.currentUserReducer);

  return (
    <>
      <div className="task-details">
        <p className="task-heading">{task.taskTitle}</p>
        <p className="task-desc">{task.taskDesc}</p>

        <Link to={`/dashboard/submitTask/${task._id}`}>
          <button
            style={{
              backgroundColor: "blueviolet",
              border: "none",
              padding: "5px 10px",
              borderRadius: "10px",
              fontSize: "15px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            submit
          </button>
        </Link>
      </div>
    </>
  );
};

export default Task;
