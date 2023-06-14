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
    async increaseItemCount(product) {
      let updatedProduct;

      this.cart = this.cart.map((prod) => {
        if (prod.id === product.id) {
          prod.quantity++;
          updatedProduct = prod;
        }
        return prod;
      });
      await $fetch(`http://localhost:3000/cart/${product.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedProduct),
      });
    },
    async decreaseItemCount(product) {
      let updatedProduct;

      this.cart = this.cart.map((prod) => {
        if (prod.id === product.id && prod.quantity > 1) {
          prod.quantity--;
          updatedProduct = prod;
        }
        return prod;
      });
      if (updatedProduct) {
        await $fetch(`http://localhost:3000/cart/${product.id}`, {
          method: "PUT",
          body: JSON.stringify(updatedProduct),
        });
      }
    },
    async addItemToCart(product) {
      const productExists = this.cart.find((prod) => prod.id === product.id);

      if (productExists) {
        this.increaseItemCount(product);
      } else {
        this.cart.push({ ...product, quantity: 1 });

        await $fetch("http://localhost:3000/cart", {
          method: "POST",
          body: JSON.stringify({ ...product, quantity: 1 }),
        });
      }
    },
  },
});
