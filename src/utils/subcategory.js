import axios from "axios";

export const getSubs = async () =>
  await axios.get(`http://localhost:3001/subcategory/subs`);

export const getFilterSubcategory = async (slug) =>
  await axios.get(`http://localhost:3001/subcategory/sub/${slug}`);

export const getSubcategories = async (p) =>
  await axios.get(`http://localhost:3001/subcategory/${p}`);

export const getSubcategory = async (slug) =>
  await axios.get(`http://localhost:3001/subcategory/${slug}`);

export const deleteSubcategory = async (slug, token) =>
  await axios.delete(`http://localhost:3001/subcategory/${slug}`, {
    headers: {
      authorization: token,
    },
  });

export const updateSubcategory = async (slug, subcategory, token) => {
  console.log(" backend this is the slug" + slug);
  console.log(" backend this is the subcategory" + typeof subcategory);
  console.log(" backend this is the token" + token);
  await axios.put(`http://localhost:3001/subcategory/${slug}`, subcategory, {
    headers: {
      authorization: token,
    },
  });
};

export const createSubcategory = async (subcategory, token) =>
  await axios.post(`http://localhost:3001/subcategory/`, subcategory, {
    headers: {
      authorization: token,
    },
  });
