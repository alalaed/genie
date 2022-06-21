import axios from "axios";

export const getOrders = async (token) =>
  // await axios.get(`http://localhost:3001/admin/orders`, {
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/oders`, {
    headers: {
      authorization: token,
    },
  });

export const changeOrderStatus = async (orderId, orderStatus, token) =>
  await axios.put(
    // `http://localhost:3001/admin/order-status`,
    `${process.env.REACT_APP_BACKEND_URL}/admin/oder-status`,

    { orderId, orderStatus },
    {
      headers: {
        authorization: token,
      },
    }
  );
