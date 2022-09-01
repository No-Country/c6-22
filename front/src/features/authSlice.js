import { createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../axios/axiosInstance";

const initialState = null;
//user

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, action) => {
      const user = {
        user: action.payload.email,
        token: action.payload.token,
      };
      return user;
    },
    logout: (state) => {
      localStorage.removeItem("userTectStore");
      return initialState;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;

export const loginAction = (email, password) => async (dispatch) => {
  baseURL
    .post("/login", { email, password })
    .then(({ data }) => {
      const user = { token: data.token, email: data.email };
      localStorage.setItem("userTectStore", JSON.stringify(user));
      dispatch(login(user));
    })
    .catch((error) => {
      console.log(error);
    });
};
