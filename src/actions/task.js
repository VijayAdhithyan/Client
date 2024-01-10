import * as api from "../api";

export const fetchAllTasks = () => async (dispatch) => {
  try {
    const { data } = await api.getAllTask();
    dispatch({ type: "FETCH_TASK", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (newTaskData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.createTask(newTaskData);
    dispatch(fetchAllTasks());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const submitTask = (taskData, navigate) => async (dispatch) => {
  try {
    const {
      id,
      studentName,
      studentId,
      frontEndURL,
      frontEndSourceCode,
      backEndURL,
      backEndSourceCode,
    } = taskData;
    const { data } = await api.sumbitTask(
      id,
      studentName,
      studentId,
      frontEndURL,
      frontEndSourceCode,
      backEndURL,
      backEndSourceCode
    );
    // dispatch({ type: "SUBMIT_TASK", payload: data });
    dispatch(fetchAllTasks());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
