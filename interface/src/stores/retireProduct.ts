import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

interface product {
  productID: number
  name: string
  picture: string
}

type products = product[]

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
  ])
  const isRetirePorduct = ref<boolean>(false);

  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials: true
  })

  async function retireProductToApi() {
    await axiosInstance
      .get<products>('retireProduct')
      .then((response) => {
        retireProduct.value = response.data
        console.log(retireProduct.value)
        if(Array.isArray(retireProduct.value) && retireProduct.value.length > 0){
          isRetirePorduct.value = true
        }
        return
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  }

  return { retireProduct, responsiveOptions, isRetirePorduct, retireProductToApi }
})
