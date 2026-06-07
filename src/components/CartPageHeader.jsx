import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const CartPageHeader = () => {
  return (
    <header className="cart-page-header">
      <div className="cart-header-logo">Logo</div>

      <nav className="cart-header-nav">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Shop</Link>
      </nav>

      <Link to="/" className="back-btn" >
        <FontAwesomeIcon icon={faAnglesLeft}/>
        <span>Previous</span>
      </Link>
    </header>
  );
};

export default CartPageHeader;