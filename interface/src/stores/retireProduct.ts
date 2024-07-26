import { ref } from 'vue'
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

export const useRetireProductStore = defineStore('retireProduct', () => {
  const retireProduct = ref<products>([])
  const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  withCredentials: true,
})
  
  async function retireProductToApi() {
    await axiosInstance.get<products>("retireProduct")
    .then((response) => {
      retireProduct.value = response.data;
      return
    }).catch((error) =>{
      console.log(error);
      return error;
    })
  }

  return { retireProduct, responsiveOptions }
})
