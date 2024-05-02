import { observer } from "mobx-react";
import cartStore from "./CartStore";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Homepage.css";
import { Link } from "react-router-dom";
const src = "https://fakestoreapi.com/products/";

function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(src).then((data) => {
      setArticles(data.data);
    });
  }, []);

  const addToCart = (item) => {
    cartStore.addToCart(item);
  };

  return (
    <div className="products">
      {articles.map((product, index) => {
        return (
          <div className="card">
            <div className="img-div">
              <img className="product-img" src={product.image} alt="" />
            </div>
            <Link to={`product/${product.id}`}>
              <p className="Product">{product.title}</p>
            <p className="product_price">  {product.price}$</p>
            </Link>
           <div className="add-div">

            <button className="add-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
           </div>
          </div>
        );
      })}
    </div>
  );
}

export default observer(Homepage);
