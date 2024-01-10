import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask } from "../../actions/task";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const user = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTask(
        {
          createdBy: user.result.name,
          createrId: user.result._id,
          taskTitle,
          taskDesc,
        },
        navigate
      )
    );
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <p style={{ fontSize: "28px" }}>Create New Task</p>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          marginTop: "20px",
        }}
        onClick={handleSubmit}
      >
        <label htmlFor="" style={{ fontSize: "18px" }}>
          Task Title
        </label>
        <input
          type="text"
          style={{ padding: "10px 5px" }}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <label htmlFor="" style={{ fontSize: "18px" }}>
          Task Description
        </label>
        <textarea
          rows={10}
          cols={100}
          type="text"
          style={{ padding: "10px 5px" }}
          onChange={(e) => setTaskDesc(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "blueviolet",
            border: "none",
            color: "#fff",
            padding: "10px",
            cursor: "pointer",
            fontSize: "17px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
