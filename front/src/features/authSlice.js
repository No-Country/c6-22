import { createSlice } from "@reduxjs/toolkit";

const initialState = null;
//user

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    login: (state, action) => {
      const user = {
        user: action.payload.email,
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
  //  "/register  => POST  -- Body  { email, password}"
  /*  baseURL
    .post("/user")
    .then(({ data }) => {
      const user = { token: data.token, email: data.email };
    localStorage.setItem("userTectStore", JSON.stringify(user.token));  
      dispatch(login(user));
    })
    .catch((error) => {
      console.log(error);
    }); */
  localStorage.setItem("userTectStore", JSON.stringify({ token: password }));
  dispatch(login({ token: password, email }));
};
