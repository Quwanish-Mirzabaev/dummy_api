import { makeAutoObservable } from "mobx";

class CartStore {
  cartItems = [];
  totalCartPrice = 0;

  constructor() {
    makeAutoObservable(this);

    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      this.calculateTotalCartPrice();
    }
  }

  addToCart(item) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }

    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    this.calculateTotalCartPrice();
  }

  removeFromCart(id) {
    const index = this.cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
    }

    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    this.calculateTotalCartPrice();
  }

  calculateTotalCartPrice() {
    this.totalCartPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}

const cartStore = new CartStore();
export default cartStore;
