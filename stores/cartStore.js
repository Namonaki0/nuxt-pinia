import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
  actions: {
    async getCartData() {
      const data = await $fetch("http://localhost:3000/cart");
      this.cart = data;
    },
    async deleteFromCart(product) {
      this.cart = this.cart.filter((prod) => {
        return prod.id !== product.id;
      });
      await $fetch(`http://localhost:3000/cart/${product.id}`, {
        method: "DELETE",
      });
    },
  },
});
