<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class RetireProductController extends Controller
{
    public function getRetireProduct(){
        $retiresCart =  Cart::where('is_retire', 1)->where('user_id', 1)->take(5)->get();
        // dd($retiresCart);
        foreach($retiresCart as $retireCart){

            $retireCart->product;
        }

        return $retiresCart;
    }
}
