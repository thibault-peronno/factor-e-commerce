<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    public function command(): HasMany
    {
        return $this->hasMany(Command::class, 'id', 'user_id');
    }

    public function cart(): HasMany
    {
        return $this->hasMany(Command::class, 'id', 'user_id');
    }
}
