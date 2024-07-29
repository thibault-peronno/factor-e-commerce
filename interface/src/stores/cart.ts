import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useDetailsProductStore } from './detailsProduct'

interface productCart {
  id: number
  name: string
  description: string
  picture: string
  price: number
  cart_id: number
}

interface AddProductResponse {
  message: string
  cart_id: number
}

interface productResponse {
  data: AddProductResponse
  status: number
  statusText: string
}

type productsInCart = productCart[]

export const useCartStore = defineStore('cart', () => {
  const detailsProductStore = useDetailsProductStore()
  const cartIsactive = ref<boolean>(false)
  const cartProducts = ref<productsInCart>([])
  const cartProductsFromDB = ref<productsInCart>([])
  const countProductsInCart = ref<number>(0)
  // const countTotalPricecommand = ref<number>(0)

  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    withCredentials: true
  })

  function arrayOfProductId() {
    const arrayOfProductId: number[] = []

    cartProducts.value.forEach((product) => {
      arrayOfProductId.push(product.id)
    })
    return arrayOfProductId
  }

  async function getCartProductFromDB() {
    const arrayProductId = arrayOfProductId()

    const payloadProductCart = {
      arrayProductId: arrayProductId
    }

    const quantityByProduct = axiosInstance
      .post('/quantityByProduct/', payloadProductCart)
      .then((response) => {
        console.log(response.data)
        cartProductsFromDB.value = response.data
        return
      })
      .catch((error) => {
        console.error(error)
        throw error
      })

    return quantityByProduct
  }

  async function addProductInCart(newProductInCArt: productCart) {
    try {
      const responseAxios = await addProductInCartDB(newProductInCArt)

      if (responseAxios.statusText === 'Created') {
        newProductInCArt.cart_id = responseAxios.data.cart_id

        cartProducts.value.push(newProductInCArt)
        updateCountProductInCArt()
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit au panier:", error)
    }
  }

  /*
   * Pour user_id, on devrait récuperer l'information
   * depuis un store user, initialisé au moment de la connexion.
   */
  async function addProductInCartDB(newProduct: productCart): Promise<productResponse> {
    const payloadProductCart = {
      quantity: detailsProductStore.quantityProduct,
      product_id: newProduct.id,
      user_id: 1
    }
    const promise = axiosInstance
      .post('cart', payloadProductCart)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.error(error)
        throw error
      })

    return promise
  }

  async function removeProductInCart(productId: number, cartId: number) {
    try {
      const responseAxios = await updateIsRetireInCartDB(cartId)
      if (responseAxios.status == 204) {
        const cart = cartProducts.value.filter((cartProduct) => cartProduct.id !== productId)
        cartProducts.value = cart
        updateCountProductInCArt()
      }
      getCartProductFromDB()
    } catch (error) {
      console.error('Erreur lors de la suppressiondu produit du panier:', error)
    }
  }

  async function updateIsRetireInCartDB(cartId: number) {
    const payloadRetire = {
      id: cartId,
      is_retire: 1
    }

    const promise = axiosInstance
      .put('cart/' + cartId, payloadRetire)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.error(error)
        throw error
      })

    return promise
  }

  function updateCountProductInCArt() {
    countProductsInCart.value = cartProducts.value.length
  }

  function toggleCart() {
    getCartProductFromDB()
    cartIsactive.value = !cartIsactive.value
  }

  return {
    cartIsactive,
    cartProducts,
    countProductsInCart,
    toggleCart,
    addProductInCart,
    removeProductInCart,
    cartProductsFromDB,
    getCartProductFromDB
  }
})
