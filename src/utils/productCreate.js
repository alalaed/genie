import axios from "axios";

export const createProduct = async (product, token) =>
  await axios.post(`http://localhost:3001/products`, product, {
    headers: {
      authorization: token,
    },
  });

export const getProducts = async (count) =>
  await axios.get(`http://localhost:3001/products/${count}`);
