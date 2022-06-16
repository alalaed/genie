import axios from "axios";

export const createPaymentIntent = (token, code) =>
  axios.post(
    `http://localhost:3001/stripe/create-payment-intent`,
    { codeApplied: code },
    {
      headers: {
        authorization: token,
      },
    }
  );
