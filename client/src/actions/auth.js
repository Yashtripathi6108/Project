import * as api from "../api";

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    console.log(authData)
    console.log(data)
    dispatch({ type: "AUTH", data });
    navigate('/');
  } catch (error) {
    console.log(error)
  }
}

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    navigate('/');
  } catch (error) {
    console.log(error)
  }
}













// import { setCurrentUser } from "./currentUser";
// import { fetchAllUsers } from "./users";

// export const signup = (authData, navigate) => async (dispatch) => {
//   try {
//     const { data } = await api.signUp(authData);
//     dispatch({ type: "AUTH", data });
//     dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
//     dispatch(fetchAllUsers());
//     navigate("/");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const login = (authData, navigate) => async (dispatch) => {
//   try {
//     const { data } = await api.logIn(authData);
//     dispatch({ type: "AUTH", data });
//     dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
//     navigate("/");
//   } catch (error) {
//     console.log(error);
//   }
//};
