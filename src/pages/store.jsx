import { makeAutoObservable } from "mobx";

class CartStore {
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product) {
    this.cart.push(product);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter((product) => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}

const store = new CartStore();
export default store;