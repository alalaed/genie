import axios from "axios";

export const userCart = async (cart, token) =>
  await axios.post(
    `http://localhost:3001/users/cart`,
    { cart },
    { headers: { authorization: token } }
  );

export const getUserCart = async (token) =>
  await axios.get(`http://localhost:3001/users/cart`, {
    headers: { authorization: token },
  });

export const delUserCart = async (token) =>
  await axios.delete(`http://localhost:3001/users/cart`, {
    headers: { authorization: token },
  });
export const saveUserAddress = async (address, accessToken) =>
  await axios.post(
    `http://localhost:3001/users/address`,
    { address },
    {
      headers: {
        authorization: accessToken,
      },
    }
  );
