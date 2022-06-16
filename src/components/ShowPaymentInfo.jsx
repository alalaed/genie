const ShowPaymentInfo = ({ order }) => (
  <div>
    <p>
      <span>Order Id: {order.paymentIntent.id}</span>
      {" / "}
      <span>
        Amount:{"  "}
        {(order.paymentIntent.status === "Cash on delivery"
          ? (order.paymentIntent.amount /= 10)
          : (order.paymentIntent.amount /= 10)
        ).toLocaleString("en-US", {
          style: "currency",
          currency: "EUR",
        })}
      </span>

      {" / "}
      <span>Currency: {order.paymentIntent.currency.toUpperCase()}</span>
      {" / "}
      <span>Method: {order.paymentIntent.payment_method_types[0]}</span>
      {" / "}
      <span>Payment: {order.paymentIntent.status.toUpperCase()}</span>
      {" / "}
      <span>
        Ordered on:{" / "}
        {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
      {" / "}
      <span className="badge bg-primary ">STATUS: {order.orderStatus}</span>
    </p>
  </div>
);

export default ShowPaymentInfo;