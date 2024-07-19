<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'description' => fake()->sentence(),
            'picture' => fake()->imageUrl(640, 480, 'products', true, null , true, 'jpg'),
            'price' => fake()->randomNumber(3, false),
            'category' => fake()->randomElement(['cat-1', 'cat-2', 'cat-3', 'cat-4', 'cat-5']),
            'available_quantity' => fake()->randomNumber(2, false),
        ];
    }
}
