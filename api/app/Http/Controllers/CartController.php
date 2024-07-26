<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Http\Requests\StoreCartRequest;
use App\Http\Requests\UpdateCartRequest;
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
        // dd($request->quantity);

        $cartModel = new Cart();

        $cartModel->quantity = $request->quantity;
        $cartModel->product_id = $request->product_id;
        $cartModel->user_id = $request->user_id;

        $insertedCart = $cartModel->save();

        $cartAttributes = $cartModel->getAttributes();

        if ($insertedCart) {
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
