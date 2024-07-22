import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

interface productCart {
  id: number,
  name: string,
  description: string,
  picture: string,
  price: number,
}

type productsInCart = productCart[];

export const useCartStore = defineStore('cart', () => {
  const cartIsactive = ref(false);
  const cartProducts = ref<productsInCart>([]);
  const countProductsInCart = ref(2);

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
  })

  // const toggleCart = computed(() => cartIsactive.value = !cartIsactive.value)

  function toggleCart() {
    cartIsactive.value = !cartIsactive.value;
  }
  
    // async function callProductsApi () {
    //   await axiosInstance.get<products>("product")
    // .then((response) => {
    //   products.value = response.data
    //   return
    // }).catch((error) =>{
    //   console.log(error);
    //   return error;
    // })
    // } 

  

  return { cartIsactive, toggleCart, cartProducts, countProductsInCart }
})
