import axios from "axios";

export const getOrders = async (token) =>
  await axios.get(`http://localhost:3001/admin/orders`, {
    headers: {
      authorization: token,
    },
  });

export const changeOrderStatus = async (orderId, orderStatus, token) =>
  await axios.put(
    `http://localhost:3001/admin/order-status`,
    { orderId, orderStatus },
    {
      headers: {
        authorization: token,
      },
    }
  );
