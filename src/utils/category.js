import axios from "axios";

export const getCategories = async () =>
  // await axios.get(`http://localhost:3001/category`);
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/category`);

export const getCategory = async (slug) =>
  // await axios.get(`http://localhost:3001/category/${slug}`);
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/category/${slug}`);

export const deleteCategory = async (slug, token) =>
  // await axios.delete(`http://localhost:3001/category/${slug}`, {
  await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/category/${slug}`, {
    headers: {
      authorization: token,
    },
  });

export const updateCategory = async (slug, category, token) =>
  // await axios.put(`http://localhost:3001/category/${slug}`, category, {
  await axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/category/${slug}`,
    category,
    {
      headers: {
        authorization: token,
      },
    }
  );

export const createCategory = async (category, token) =>
  // await axios.post(`http://localhost:3001/category/`, category, {
  await axios.post(`${process.env.REACT_APP_BACKEND_URL}/category/`, category, {
    headers: {
      authorization: token,
    },
  });
