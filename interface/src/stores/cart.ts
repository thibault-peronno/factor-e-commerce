import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios, { type AxiosResponse } from 'axios';

interface productCart {
  id: number,
  name: string,
  description: string,
  picture: string,
  price: number,
}

interface AddProductResponse {
  message: string,
	cart_id: number
}

interface productReponse {
data: AddProductResponse,
status: number
statusText: string
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

  async function addProductInCart(newProductInCArt: productCart) {
    try {
        const responseAxios = await addProductInCartDB(newProductInCArt);
        console.info(responseAxios);
        
        if (responseAxios.statusText === 'Created') {
            cartProducts.value.push(newProductInCArt);
            updateCountProductInCArt();
        }
    } catch (error) {
        console.error("Erreur lors de l'ajout du produit au panier:", error);
    }
}


  function updateCountProductInCArt() {
    countProductsInCart.value = cartProducts.value.length;
  }

  /*
   * Pour user_id, on devrait récuperer l'information 
   * depuis un store user, initialisé au moment de la connexion.
   */
  async function addProductInCartDB(newProduct: productCart): Promise<AxiosResponse<productReponse>> {
    const payloadProductCart = {
      quantity: 1,
      product_id: newProduct.id,
      user_id: 1,
    };
  
    // Stockez la promesse dans une variable temporaire
    const promise = axiosInstance.post('cart', payloadProductCart)
      .then((response) => {
        return response; // Assurez-vous de retourner la promesse résolue ici
      })
      .catch((error) => {
        console.error(error);
        throw error; // Propagez l'erreur pour qu'elle soit gérée par le code appelant
      });
  
    // Retournez la promesse stockée
    return promise;
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
