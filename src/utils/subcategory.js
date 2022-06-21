import axios from "axios";

export const getSubs = async () =>
  // await axios.get(`http://localhost:3001/subcategory/subs`);
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/subcategory/subs`);

export const getFilterSubcategory = async (slug) =>
  // await axios.get(`http://localhost:3001/subcategory/sub/${slug}`);
  await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/subcategory/sub/${slug}`
  );

export const getSubcategories = async (p) =>
  // await axios.get(`http://localhost:3001/subcategory/${p}`);
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/subcategory/${p}`);

export const getSubcategory = async (slug) =>
  // await axios.get(`http://localhost:3001/subcategory/${slug}`);
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/subcategory/${slug}`);

export const deleteSubcategory = async (slug, token) =>
  // await axios.delete(`http://localhost:3001/subcategory/${slug}`, {
  await axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/subcategory/${slug}`,
    {
      headers: {
        authorization: token,
      },
    }
  );

export const updateSubcategory = async (slug, subcategory, token) => {
  // await axios.put(`http://localhost:3001/subcategory/${slug}`, subcategory, {
  await axios.put(
    `${process.env.REACT_APP_BACKEND_URL}/subcategory/${slug}`,
    subcategory,
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const createSubcategory = async (subcategory, token) =>
  await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/subcategory/`,
    subcategory,
    {
      headers: {
        authorization: token,
      },
    }
  );
