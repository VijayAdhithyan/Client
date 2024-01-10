import { useSelector } from "react-redux";
import Task from "./Task";

const StudentDash = () => {
  const taskLists = useSelector((state) => state.getAllTaskReducer);
  console.log(taskLists.data);

  return (
    <div>
      <h1 className="dash-heading">Student Dashboard</h1>
      {taskLists.data === null ? (
        <p>Loading....</p>
      ) : (
        <>
          <p style={{ textAlign: "center", fontSize: "22px" }}>
            No of Tasks : {taskLists.data.length}
          </p>
          {taskLists.data.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </>
      )}
    </div>
  );
};

export default StudentDash;
