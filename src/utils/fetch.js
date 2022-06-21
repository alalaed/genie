import { toastSuccess, toastError } from "./toastNotification";
import "react-toastify/dist/ReactToastify.css";

export const registerUser = async (user) => {
  try {
    // const res = await fetch(`http://localhost:3001/users/register`, {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/users/register`,
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const { _id } = await res.json();
    console.log("_id:", _id);
    toastSuccess("Thanks for registering");
    return { _id };
  } catch (error) {
    toastError(`Error registering user: ${error}`);
    console.log(error);
  }
};

export const updateUser = async (user, token) => {
  try {
    // const res = await fetch(`http://localhost:3001/users/me`, {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/me`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
    });
    const updatedUser = await res.json();
    console.log("updatedUser", updatedUser);
    toastSuccess("Profile Updated");
    window.localStorage.setItem("user", JSON.stringify(updatedUser));
    return { user };
  } catch (error) {
    toastError(`Error Updating user: ${error}`);
    console.log(error);
  }
};
