import { Link, Route, Routes } from "react-router-dom";
import { observer } from "mobx-react";
import Userspage from "./Userspage";
import Homepage from "./Homepage";
import Notfoundpage from "./Notfoundpage";
import "./Header.css"
import Productpage from "./Productpage";
import UserPage from "./UserPage";
import Todopage from "./Todopage";

const Header = observer(() => {
  return (
    <>
      <header className="header">
        <div>
          <h1>
            <Link to="/" className="logo">
              API 
            </Link>
          </h1>
        </div>
        <div className="header-links">
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/todo">Todos</Link>
            </li>
            <li>
              <Link to="/users">
                Users
               </Link>
            </li>
          </ul>
        </div>
      </header>
      <Routes>
        <Route path="/todo" element={<Todopage/>}></Route>
        <Route path="/" element={<Homepage/>} />
        <Route path="/users" element={<Userspage/>} />
        <Route path="*" element={<Notfoundpage/>} />
        <Route path="/users/user/:Id" element={<UserPage/>}/>
        <Route path="product/:Id" element={<Productpage/>} />
      </Routes>
    </>
  );
});

export default Header;