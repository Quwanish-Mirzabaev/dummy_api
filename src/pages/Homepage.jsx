import { observer } from "mobx-react";
import cartStore from "./CartStore";
import { useState,useEffect } from "react";
import axios from "axios";
import "./Homepage.css"
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
      {articles.map((article, index) => {
        return (
          <div className="card" key={index}>
            <div>
              <img className="product-img" src={article.image} alt="" />
            </div>
            <p className="Product">{article.title}</p>
            <p> ${article.price}</p>
            <p>{article.category}</p>
            <button className="add-btn" onClick={() => addToCart(article)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default observer(Homepage);
