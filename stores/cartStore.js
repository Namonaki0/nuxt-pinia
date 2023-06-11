import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    async getCartData() {
      const data = await $fetch("http://localhost:3001/cart");
      this.cart = data;
      //   console.log(this.cart);
    },
  },
  getters: {},
});
