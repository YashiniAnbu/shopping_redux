import { useSelector } from "react-redux";
import CardForCart from "./CardForCart";
import CartPageHeader from "./CartPageHeader";
import cartImg from "../assets/cart.png";

const Cart = () => {
  const addedProducts = useSelector(
    (state) => state.cart.addedProducts
  );

  const subtotal = addedProducts
    .reduce(
      (acc, item) =>
        acc + item.price * item.quantity,
      0
    )
    .toFixed(2);

  const totalQuantity = addedProducts.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  return (
    <>
      <CartPageHeader />

      <div className="cart-page">
        {addedProducts.length === 0 ? (
          <div className="empty">
            <img
              src={cartImg}
              alt="Empty Cart"
              className="empty-cart-img"
            />
            <h2>Your Cart Is Empty</h2>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {addedProducts.map((product) => (
                <CardForCart
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            <div className="cart-summary">
              <div className="row">
                <span className="label">
                  SUBTOTAL:
                </span>

                <span className="value">
                  ₹{subtotal}
                </span>
              </div>

              <div className="row">
                <span className="label">
                  TOTAL QUANTITY:
                </span>

                <span className="value">
                  {totalQuantity}
                </span>
              </div>

              <div className="row">
                <span className="label">
                  SHIPPING:
                </span>

                <span className="free">
                  FREE
                </span>
              </div>

              <div className="total-row">
                <span className="total-label">
                  TOTAL:
                </span>

                <span className="total-value">
                  ${subtotal}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;