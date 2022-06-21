import axios from "axios";

export const createCode = async (PromoCode, token) =>
  await axios.post(
    // `http://localhost:3001/code/`,
    `${process.env.REACT_APP_BACKEND_URL}/code/`,
    { PromoCode },
    {
      headers: {
        authorization: token,
      },
    }
  );
export const getCodes = async () =>
  // await axios.get("http://localhost:3001/code");
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/code`);

export const delCode = async (codeId, token) =>
  // await axios.delete(`http://localhost:3001/code/${codeId}`, {
  await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/code/${codeId}`, {
    headers: {
      authorization: token,
    },
  });

export const applyCode = async (token, PromoCode) =>
  await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/users/cart/code`,
    // `http://localhost:3001/users/cart/code`,
    { PromoCode },
    {
      headers: {
        authorization: token,
      },
    }
  );
