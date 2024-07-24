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
  const countProductsInCart = ref(0);

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
  })

  function addProductInCart(newProductInCArt : productCart) {
    cartProducts.value.push(newProductInCArt);
    // voir pour appeler une fonction ou bien une computed spécialement pour mettre à jour le nombre de produit
    countProductsInCart.value = cartProducts.value.length;
  }

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

  

  return { cartIsactive,  cartProducts, countProductsInCart, toggleCart, addProductInCart }
})
