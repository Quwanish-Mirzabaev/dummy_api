import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import "./Header.css";
import Cart from "./Cart";
import Notfoundpage from "./Notfoundpage";
import Basket from "./images/basket.png";
import AddedItemsCounter from "./AddedItemsCounter";
import cartStore from "./CartStore";

function Header() {
  return (
    <>
      <header className="header">
        <div>
          <h1>
            <Link to="/" className="logo">
              SUPERMARKET
            </Link>
          </h1>
        </div>
        <div className="header-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/cart">
                <img className="logo-img" src={Basket} alt="basket" />
                <AddedItemsCounter />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default Header;
