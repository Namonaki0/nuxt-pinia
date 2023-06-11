import { defineStore } from "pinia";

export default useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
});
