<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Command extends Model
{
    use HasFactory;

    public function user() : HasOne
    {
        return $this-> hasOne(User::class, 'id', 'user_id');
    }

    public function cart(): HasMany
    {
        return $this->hasMany(Cart::class, 'id', 'command_id');
    }
}
