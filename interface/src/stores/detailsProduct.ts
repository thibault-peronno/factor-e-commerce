import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRoute } from 'vue-router'

interface product {
  id: number
  name: string
  description: string
  picture: string
  price: number
  category: string
  available_quantity: number
  created_at: string
  updated_at: string
}

export const useDetailsProductStore = defineStore('detailsProduct', () => {
  const quantityProduct = ref(1)
  const product = ref<product>({
    id: 0,
    name: 'Non trouvé',
    description: "Le produit n'a pas été trouvé",
    picture: '',
    price: 0,
    category: 'introuvable',
    available_quantity: 0,
    created_at: '',
    updated_at: ''
  })

  const route = useRoute()

  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials: true
  })

  async function callProductApi() {
    quantityProduct.value = 1
    await axiosInstance
      .get<product>('product/' + route.params.productId)
      .then((response) => {
        product.value = response.data
        return
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  }

  return { quantityProduct, product, callProductApi }
})
