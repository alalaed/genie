import axios from "axios";

export const getCategories = async () =>
  await axios.get(`http://localhost:3001/category`);

export const getCategory = async (slug) =>
  await axios.get(`http://localhost:3001/category/${slug}`);

export const deleteCategory = async (slug, token) =>
  await axios.delete(`http://localhost:3001/category/${slug}`, {
    headers: {
      authorization: token,
    },
  });

export const updateCategory = async (slug, category, token) =>
  await axios.put(`http://localhost:3001/category/${slug}`, category, {
    headers: {
      authorization: token,
    },
  });

export const createCategory = async (category, token) =>
  await axios.post(`http://localhost:3001/category/`, category, {
    headers: {
      authorization: token,
    },
  });
