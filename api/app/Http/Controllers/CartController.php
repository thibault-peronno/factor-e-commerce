<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCartRequest $request)
    {
        // Log::info('Méthode store atteinte');

        $cartModel = new Cart();

        $cartModel->quantity = $request->quantity;
        $cartModel->product_id = $request->product_id;
        $cartModel->user_id = $request->user_id;

        $isInsertedCart = $cartModel->save();

        $cartAttributes = $cartModel->getAttributes();

        if ($isInsertedCart) {
            return response()->json([
                "message" => "Panier ajouté avec succès",
                "cart_id" => $cartAttributes['id']
            ], Response::HTTP_CREATED);
            
        } else {
            return response([
                "error" => "Échec de l'ajout du panier"
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCartRequest $request, Cart $cart)
    {
        $cart->is_retire = $request->is_retire;
        
        $isInsertedCart = $cart->save();

        if ($isInsertedCart) {
            return response("", Response::HTTP_NO_CONTENT);
        } else {
            return response("", Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }

    /**
     * To get the product to display on the products on cart
     * @param Request $request
     */
    public function getProductToCart(Request $request, Cart $cart)
    {
        $productsInCart = Cart::whereIn('product_id', $request->input('arrayProductId'))->where('is_retire', 0)->get();

        $ProductCart = [];
        foreach($productsInCart as $productInCart)
        {
            $productInCart->product;

            $ProductCart[] = [
                'productId' => $productInCart->product->id,
                'name' => $productInCart->product->name,
                'price' => $productInCart->product->price,
                'picture' => $productInCart->product->picture,
                'cartId' => $productInCart->id,
                'quantity' => $productInCart->quantity,
            ];
        }

            
       return response()->json($ProductCart, Response::HTTP_OK);
    }
}
