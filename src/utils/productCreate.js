import axios from "axios";

export const createProduct = async (product, token) =>
  await axios.post(`http://localhost:3001/products`, product, {
    headers: {
      authorization: token,
    },
  });

export const getProducts = async (count) =>
  await axios.get(`http://localhost:3001/products/count/${count}`);

export const deleteProduct = async (id, token) =>
  await axios.delete(`http://localhost:3001/products/${id}`, {
    headers: {
      authorization: token,
    },
  });

export const getSingleProduct = async (slug) =>
  await axios.get(`http://localhost:3001/products/${slug}`);

export const updateProduct = async (slug, product, token) =>
  await axios.put(`http://localhost:3001/products/${slug}`, product, {
    headers: {
      authorization: token,
    },
  });

export const getOrderedProducts = async (sort, order, limit) =>
  await axios.post(`http://localhost:3001/products/product-order`, {
    sort,
    order,
    limit,
  });

export const productRate = async (userId, productId, rate, token) =>
  await axios.put(
    `http://localhost:3001/products/${userId}/rating/${productId}`,
    { rate },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const getRelatedProducts = async (productId) =>
  await axios.get(`http://localhost:3001/products/related/${productId}`);
