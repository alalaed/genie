import axios from "axios";

export const getSubcategories = async () =>
  await axios.get(`http://localhost:3001/subcategory`);

export const getSubcategory = async (slug) =>
  await axios.get(`http://localhost:3001/subcategory/${slug}`);

export const deleteSubcategory = async (slug, token) =>
  await axios.delete(`http://localhost:3001/subcategory/${slug}`, {
    headers: {
      authorization: token,
    },
  });

export const updateSubcategory = async (slug, subcategory, token) =>
  await axios.put(`http://localhost:3001/subcategory/${slug}`, subcategory, {
    headers: {
      authorization: token,
    },
  });

export const createSubcategory = async (subcategory, token) =>
  await axios.post(`http://localhost:3001/subcategory/`, subcategory, {
    headers: {
      authorization: token,
    },
  });
