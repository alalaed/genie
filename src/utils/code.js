import axios from "axios";

export const createCode = async (PromoCode, token) =>
  await axios.post(
    `http://localhost:3001/code/`,
    { PromoCode },
    {
      headers: {
        authorization: token,
      },
    }
  );
export const getCodes = async () =>
  await axios.get("http://localhost:3001/code");

export const delCode = async (codeId, token) =>
  await axios.delete(`http://localhost:3001/code/${codeId}`, {
    headers: {
      authorization: token,
    },
  });

export const applyCode = async (token, PromoCode) =>
  await axios.post(
    `http://localhost:3001/users/cart/code`,
    { PromoCode },
    {
      headers: {
        authorization: token,
      },
    }
  );
