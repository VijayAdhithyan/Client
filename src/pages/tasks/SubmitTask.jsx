import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { submitTask } from "../../actions/task";

const SubmitTask = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.currentUserReducer);
  const taskLists = useSelector((state) => state.getAllTaskReducer);

  const [fEURL, setFEURL] = useState("");
  const [fESourceCode, setFESourceCode] = useState("");
  const [bEURL, setBEURL] = useState("");
  const [bESourceCode, setBESourceCode] = useState("");

  const taskSubmit = (e) => {
    e.preventDefault();
    dispatch(
      submitTask(
        {
          id,
          studentName: user.result.name,
          studentId: user.result._id,
          frontEndURL: fEURL,
          frontEndSourceCode: fESourceCode,
          backEndURL: bEURL,
          backEndSourceCode: bESourceCode,
        },
        navigate
      )
    );
  };

  return (
    <>
      {taskLists.data === null ? (
        <p>Loading...</p>
      ) : (
        <>
          {taskLists.data
            .filter((task) => task._id === id)
            .map((task) => (
              <div
                style={{ textAlign: "center", marginTop: "85px" }}
                key={task._id}
              >
                <h2>Task Title : {task.taskTitle}</h2>
                <h4 style={{ marginBottom: "40px" }}>
                  Task Desc : {task.taskDesc}
                </h4>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    rowGap: "10px",
                  }}
                  onSubmit={taskSubmit}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "90px",
                    }}
                  >
                    <label>frontEndURL</label>
                    <input
                      type="text"
                      onChange={(e) => setFEURL(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "30px",
                    }}
                  >
                    <label>frontEndSourceCode</label>
                    <input
                      type="text"
                      onChange={(e) => setFESourceCode(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "90px",
                    }}
                  >
                    <label>backEndURL</label>
                    <input
                      type="text"
                      onChange={(e) => setBEURL(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "30px",
                    }}
                  >
                    <label>backEndSourceCode</label>
                    <input
                      type="text"
                      onChange={(e) => setBESourceCode(e.target.value)}
                    />
                  </div>
                  <button
                    style={{
                      backgroundColor: "blueviolet",
                      border: "none",
                      borderRadius: "5px",
                      fontSize: "16px",
                      color: "#fff",
                      padding: "7px 16px",
                      marginTop: "20px",
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default SubmitTask;
