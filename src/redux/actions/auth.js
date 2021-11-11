import * as api from "../api/index.js";
import { AUTH } from "../../constants/actionTypes";

// Action Creators
// export const signin = (formData, history) => async (dispatch) => {
//   try {
//     const { data } = await api.signIn(formData);
//     dispatch({ type: AUTH, data });
//     history.push("/");
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);
    dispatch({ type: AUTH, data });
    navigate("/dashboard/portfolio");
  } catch (error) {
    console.log(error.response.data.message);
  }
};
