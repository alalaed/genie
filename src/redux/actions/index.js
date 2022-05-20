import { toastSuccess, toastError } from "../../utils/toastNotification";
import "react-toastify/dist/ReactToastify.css";

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        const { user, accessToken } = await res.json();
        console.log("user:", user);
        console.log("accessToken:", accessToken);
        window.localStorage.setItem("user", JSON.stringify(user));
        window.localStorage.setItem("accessToken", JSON.stringify(accessToken));
        dispatch({
          type: "LOGIN",
          payload: {
            user,
            accessToken,
          },
        });
        toastSuccess("Logged in successfully");

        return { accessToken, user };
      } else {
        toastError("Incorrect Email/Password");
      }
    } catch (error) {
      toastError(`Error logging in user: ${error}`);
      console.log(error);
    }
  };
};
