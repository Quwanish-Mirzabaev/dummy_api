import { useState, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";
import { Link } from "react-router-dom";
const src = "https://fakestoreapi.com/products/";

function Homepage() {
  const [products, setArticles] = useState([]);

  useEffect(() => {
    axios.get(src).then((data) => {
      setArticles(data.data);
    });
  }, []);

  return (
    <div className="products">
      {products.map((product, index) => {
        return (
          <div className="card">
            <div className="img-div">
              <img className="product-img" src={product.image} alt="" />
            </div>
            <Link to={`product/${product.id}`}>
              <p className="Product">{product.title}</p>
            <p className="product_price">  {product.price}$</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Homepage;

