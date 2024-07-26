import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios, { type AxiosResponse } from 'axios';

interface productCart {
  id: number,
  name: string,
  description: string,
  picture: string,
  price: number,
  cart_id: number,
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
          newProductInCArt.cart_id = responseAxios.data.cart_id;
          console.log(newProductInCArt, responseAxios.data.cart_id);
            cartProducts.value.push(newProductInCArt);
            updateCountProductInCArt();
        }
    } catch (error) {
        console.error("Erreur lors de l'ajout du produit au panier:", error);
    }
}



/*
* Pour user_id, on devrait récuperer l'information 
* depuis un store user, initialisé au moment de la connexion.
*/
async function addProductInCartDB(newProduct: productCart): Promise<productReponse> {
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

async function removeProductInCart(cart_id : number) {
  try {
    const responseAxios = await updateIsRetireInCartDB(cart_id);
    console.info(responseAxios.status);

    if(responseAxios.status == 204){
      const cart = cartProducts.value.filter((cartProduct) =>cartProduct.cart_id !== cart_id)

      cartProducts.value = cart;
      updateCountProductInCArt();
    }
  } catch (error) {
    console.error("Erreur lors de la suppressiondu produit du panier:", error);
  }
}

async function updateIsRetireInCartDB(cart_id : number){
  const payloadRetire = {
    id:cart_id,
    is_retire: 1
  }

  const promise = axiosInstance.put('cart/' + cart_id, payloadRetire)
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



function updateCountProductInCArt() {
countProductsInCart.value = cartProducts.value.length;
}

  function toggleCart() {
    cartIsactive.value = !cartIsactive.value;
  }


  

  return { cartIsactive,  cartProducts, countProductsInCart, toggleCart, addProductInCart, removeProductInCart }
})
