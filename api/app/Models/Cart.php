<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cart extends Model
{
    use HasFactory;

    public function user() : HasOne
    {
        return $this-> hasOne(User::class, 'id', 'user_id');
    }

    public function product() : HasOne
    {
        return $this-> hasOne(Product::class, 'id', 'product_id');
    }

    public function command() : HasOne
    {
        return $this-> hasOne(Command::class, 'id', 'command_id');
    }
}
