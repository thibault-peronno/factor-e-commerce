import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useProductStore = defineStore('product', () => {
  const products = ref([])

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
  })
  
    async function callProductsApi () {
      await axiosInstance.get("product")
    .then((response) => {
      products.value = response.data
      return
    }).catch((error) =>{
      console.log(error);
      return error;
    })
    } 

  

  return { products, callProductsApi }
})
