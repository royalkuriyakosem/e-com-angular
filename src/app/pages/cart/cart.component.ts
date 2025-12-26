import { Component, computed } from '@angular/core';
import { CartService } from '../../cart.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
      @if (cartService.cartItems().length === 0) {
        <p>Your cart is empty.</p>
      } @else {
        <div class="space-y-4">
          @for (item of cartService.cartItems(); track item.id) {
            <div class="flex items-center justify-between border-b pb-4">
              <div class="flex items-center space-x-4">
                <img [src]="item.thumbnail" alt="{{item.title}}" class="w-16 h-16 object-cover rounded">
                <div>
                  <h3 class="font-semibold">{{item.title}}</h3>
                  <p class="text-gray-600">\${{item.price}}</p>
                </div>
              </div>
              <button (click)="cartService.removeFromCart(item.id)" class="text-red-500 hover:text-red-700">Remove</button>
            </div>
          }
          <div class="mt-4 text-right">
            <h2 class="text-xl font-bold">Total: \${{cartService.totalPrice()}}</h2>
            <button class="mt-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Checkout</button>
          </div>
        </div>
      }
    </div>
  `
})
export class CartComponent {
    constructor(public cartService: CartService) { }
}
