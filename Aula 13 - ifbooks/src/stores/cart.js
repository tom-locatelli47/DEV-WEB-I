import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {

  const cart = ref({
    items: [],
    total: 0,
  });
  
  function addBook(book) {
    this.cart.items.push(book)
    this.cart.total += book.price
    console.log(this.cart)


  }
  return {cart, addBook};
});