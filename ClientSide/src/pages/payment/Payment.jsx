import "./payment.css";
import Layout from "../../components/layout/Layout";
import useCart from "../../hooks/useCart";
import SingleCartItem from "../cart/singleCartItem/SingleCartItem";
import useAuth from "../../hooks/useAuth";
function Payment() {
  const { user } = useAuth();
  const { state, dispatch, cartItemCount } = useCart();
  console.log(state);
  return (
    <Layout>
      <div className="payment__page__container">
        <div className="payment__page__leftSide">
          <div className="payment__page__title">
            <h1>Review & Pay</h1>
          </div>

          <div className="payment__page__address">
            <div>
              <h3>Shipping Address</h3>
            </div>
            <div>
              <p>
                <span>{user.email ? user.email : "John Smith"}</span>, 2491 Reel
                Avenue, Apt 4B Albuquerque, NM 87102, United States
              </p>
            </div>
          </div>
          <div className="payment__page__cart__items">
            <div>
              <h3>Check Your Items</h3>
            </div>
            <div>
              {state.cart.map((individualItem) => {
                return (
                  <SingleCartItem
                    individualItem={individualItem}
                    key={individualItem.id}
                    hideContent={true}
                  />
                );
              })}
            </div>
          </div>
          <div className="payment__page__payment__methods">
            <h3>Payment Methods</h3>
          </div>
        </div>
        <div className="payment__page__rightSide">
          <h3>Order Summary</h3>
          <button>Place Order</button>
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
