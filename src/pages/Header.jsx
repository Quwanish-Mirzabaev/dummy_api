import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import "./Header.css";
import Cart from "./Cart";
import Notfoundpage from "./Notfoundpage";
import Basket from "./images/basket.png"

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
          </ul>
          <ul>
            <li>
              <Link>Sign</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/cart">
                <img className="logo-img" src={Basket} alt="basket" />
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/cart" element={<Cart />}>
          {" "}
        </Route>
        <Route path="*" element={<Notfoundpage />}></Route>
      </Routes>
    </>
  );
}
export default Header;