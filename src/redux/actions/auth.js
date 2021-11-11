import * as api from "../api/index.js";
import { AUTH } from "../../constants/actionTypes";

// Action Creators
export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: AUTH, data });
    navigate("/dashboard/portfolio");
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
    } else {
      console.log(error);
    }
  }
};

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, data });
    navigate("/dashboard/portfolio");
  } catch (error) {
    console.log(error.response.data.message);
  }
};
