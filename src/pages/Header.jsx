import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import "./Header.css";
import Cart from "./Cart";
import Notfoundpage from "./Notfoundpage";
import Basket from "./images/basket.png";
import cartStore from "./CartStore";
import { observer } from "mobx-react";
import Productpage from "./productpage";
import Checkout from "./checkoutpage";


const Header = observer(() => {
  return (
    <>
      <header className="header">
        <div>
          <h1>
            <Link to="/" className="logo">
              AVIASEILS 
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
                <span>{cartStore.totalAddedItems}</span>
               </Link>
            </li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Notfoundpage />} />
        <Route path="product/:Id" element={<Productpage/>} />
      <Route path="/chechout" element={<Checkout/>}></Route>
      </Routes>
    </>
  );
});

export default Header;
