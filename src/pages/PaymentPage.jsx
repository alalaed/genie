import { Container, Row, Col } from "react-bootstrap";
import StripeCheckOut from "../components/StripeCheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentPage = () => {
  const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

  return (
    <Container className="container p-5 text-center">
      <Row>
        <h4>Complete your purchase</h4>
        <Elements stripe={promise}>
          <div>
            <StripeCheckOut />
          </div>
        </Elements>
      </Row>
    </Container>
  );
};

export default PaymentPage;
