import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useSelector } from "react-redux";

const StaffDash = () => {

  const taskLists = useSelector((state) => state.getAllTaskReducer);
  const user = useSelector((state) => state.currentUserReducer);

  console.log(taskLists);

  return (
    <>
      <h1 className="dash-heading">Staff Dashboard</h1>
      <div>
        <Link to="/dashboard/createTask" className="task-btn">
          <IoMdAdd className="add-icon" />
          <p>New Task</p>
        </Link>
      </div>
      <div className="created-task">
        <p>Created Task :</p>
        <div className="task-container">
          {taskLists.data === null ? (
            <p>Loading..</p>
          ) : (
            taskLists.data.map((taskList) =>
              taskList.createrId === user.result._id ? (
                <>
                  <div className="task-details">
                    <p className="task-heading">{taskList.taskTitle}</p>
                    <p className="task-desc">{taskList.taskDesc}</p>
                  </div>
                </>
              ) : (
                <></>
              )
            )
          )}
        </div>
      </div>
    </>
  );
};

export default StaffDash;
