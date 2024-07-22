import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

interface product {
		id: number,
		name: string,
		description: string,
		picture: string,
		price: number,
		category: string,
		available_quantity: number,
		created_at: string,
		updated_at: string
}

type products = product[];

export const useProductStore = defineStore('product', () => {
  const products = ref<products>([])

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
  })
  
    async function callProductsApi () {
      await axiosInstance.get<products>("product")
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
