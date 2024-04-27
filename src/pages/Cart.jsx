import React from "react";
import { observer } from "mobx-react";
import cartStore from "./CartStore";
import "./Cart.css";

const Cart = observer(() => {
  const cartItems = cartStore.cartItems;
  const totalCartPrice = cartStore.totalCartPrice;

  const handleAddToCart = (item) => {
    cartStore.addToCart(item);
  };

  const handleRemoveFromCart = (id) => {
    cartStore.removeFromCart(id);
  };

  const deleteCart = () => {
    cartStore.deleteCart();
  };

  const removeItem = (id) => {
    cartStore.removeItem(id);
  };

  return (
    <div className="cart">
      <h1>Korzina</h1>
      <p className="total">Total price: ${totalCartPrice.toFixed(2)}</p>
      <button className="btn-delete" onClick={() => deleteCart()}>Очистить Корзину</button>
<h1>{}</h1>
      {cartItems.map((article) => {
        return (
          <div className="cart-item" key={article.id}>
            <div className="product-info">
              <img className="product-img" src={article.image} alt="" />
            </div>
            <p>X{article.quantity}</p>
            <p>${article.price}</p>
            <p className="product-title">{article.title}</p>
            <div className="btn-group">
              <button className="btn-minus" onClick={() => handleRemoveFromCart(article.id)}>-</button>
              <button className="btn-plus" onClick={() => handleAddToCart(article)}>+</button>
              <button className="btn-remove" onClick={() => removeItem(article.id)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default Cart;
