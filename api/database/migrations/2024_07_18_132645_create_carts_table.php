<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->integer('quantity');
            $table->boolean('is_retire')->default(false);
            $table->boolean('is_buy')->default(false);
            $table->foreignId('product_id', 'fk_product_in_cart')->constrained("products")->onDelete('no action')->onUpdate('cascade');
            $table->foreignId('command_id', 'fk_product_in_cart')->constrained("commands")->onDelete('no action')->onUpdate('cascade')->nullable();
            $table->foreignId('user_id', 'fk_user_in_cart')->constrained("users")->onDelete('no action')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
