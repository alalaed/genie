import axios from "axios";

export const userCart = async (cart, token) =>
  await axios.post(
    `http://localhost:3001/users/cart`,
    { cart },
    { headers: { authorization: token } }
  );

export const getUserCart = async (token) =>
  await axios.get(`http://localhost:3001/users/cart`, {
    headers: { authorization: token },
  });

export const delUserCart = async (token) =>
  await axios.delete(`http://localhost:3001/users/cart`, {
    headers: { authorization: token },
  });
export const saveUserAddress = async (address, token) =>
  await axios.post(
    `http://localhost:3001/users/address`,
    { address },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const createOrder = async (stripeResponse, token) =>
  await axios.post(
    `http://localhost:3001/users/order`,
    { stripeResponse },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const getUserOrders = async (token) =>
  await axios.get(`http://localhost:3001/users/orders`, {
    headers: {
      authorization: token,
    },
  });

export const getWishlist = async (token) =>
  await axios.get(`http://localhost:3001/users/wishlist`, {
    headers: {
      authorization: token,
    },
  });

export const removeFromWishlist = async (productId, token) =>
  await axios.put(
    `http://localhost:3001/users/wishlist/${productId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const addToWishlist = async (productId, token) =>
  await axios.post(
    `http://localhost:3001/users/wishlist`,
    { productId },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const createCashOrder = async (token, CashOnDelivery, validCoupon) =>
  await axios.post(
    `http://localhost:3001/users/cash-order`,
    { couponApplied: validCoupon, CashOnDelivery },
    {
      headers: {
        authorization: token,
      },
    }
  );
