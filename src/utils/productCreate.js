import axios from "axios";

export const createProduct = async (product, token) =>
  // await axios.post(`http://localhost:3001/products`, product, {
  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/products`, product, {
    headers: {
      authorization: token,
    },
  });

export const getProducts = async (count) =>
  // await axios.get(`http://localhost:3001/products/count/${count}`);
  await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/products/count/${count}`
  );

export const deleteProduct = async (id, token) =>
  // await axios.delete(`http://localhost:3001/products/${id}`, {
  await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/products/${id}`, {
    headers: {
      authorization: token,
    },
  });

export const getSingleProduct = async (slug) =>
  // await axios.get(`http://localhost:3001/products/${slug}`);
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products/${slug}`);

export const updateProduct = async (slug, product, token) =>
  // await axios.put(`http://localhost:3001/products/${slug}`, product, {
  await axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/products/${slug}`,
    product,
    {
      headers: {
        authorization: token,
      },
    }
  );

export const getOrderedProducts = async (sort, order, limit) =>
  // await axios.post(`http://localhost:3001/products/product-order`, {
  await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/products/product-order`,
    {
      sort,
      order,
      limit,
    }
  );

export const productRate = async (userId, productId, rate, token) =>
  await axios.put(
    // `http://localhost:3001/products/${userId}/rating/${productId}`,
    `${process.env.REACT_APP_BACKEND_URL}/products/${userId}/rating/${productId}`,
    { rate },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const getRelatedProducts = async (productId) =>
  // await axios.get(`http://localhost:3001/products/related/${productId}`);
  await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/products/related/${productId}`
  );

export const getProductsByFilter = async (query) =>
  // await axios.post(`http://localhost:3001/products/search/filters`, query);
  await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/products/search/filters`,
    query
  );
