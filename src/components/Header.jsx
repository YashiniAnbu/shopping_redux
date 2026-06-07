import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const productCount = useSelector(
    (state) => state.cart.productCount
  );

  return (
    <header className="header">
      <div className="header-logo">Logo</div>

      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Shop</Link>
      </nav>

      <Link to="/cart" className="cart-btn">
       <FontAwesomeIcon icon={faCartShopping} />
        <span className="cart-text"> Cart </span>

        {productCount > 0 && (
          <span className="cart-count">
            {productCount}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;