import { useDispatch, useSelector } from "react-redux";
import {addProductToCart,removeProductFromCart} from "../slices/Slice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const addedProducts = useSelector(
    (state) => state.cart.addedProducts
  );

  const isAdded = addedProducts.find(
    (item) => item.id === product.id
  );

  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="card-img"
        />
      </div>

      <div className="card-body">
        <h3 className="card-title">
          {product.title}
        </h3>

        <p className="card-category">
          {product.category}
        </p>

        <div className="card-footer">
          <span className="card-price">
            ${product.price}
          </span>

          {isAdded ? (
            <button className="remove-btn"
              onClick={() => dispatch(removeProductFromCart(product.id))}>
              Remove From Cart
            </button>
          ) : (
            <button className="card-btn" 
              onClick={() =>dispatch(addProductToCart(product))}>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;