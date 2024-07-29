<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RetireProductController extends Controller
{
    /**
     * to get 5 last prodcuts retired from the cart for the current user
     */
    public function getRetireProduct()
    {
        $retiresCart =  Cart::where('is_retire', 1)->where('user_id', 1)->take(5)->get();

        $retireProduct = [];
        foreach ($retiresCart as $retireCart) {
            $retireCart->product;

            $retireProduct[] = [
                'productID' => $retireCart->product->id,
                'name' => $retireCart->product->name,
                'picture' => $retireCart->product->picture,

            ];
        }
        return response()->json($retireProduct, Response::HTTP_OK);
    }
}
