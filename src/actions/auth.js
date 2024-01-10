import * as api from "../api";
import setCurrentUser from "./currentUser";

export const studentSignup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.studentSignup(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const staffSignup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.staffSignup(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const studentLogin = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.studentLogin(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const staffLogin = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.staffLogin(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};