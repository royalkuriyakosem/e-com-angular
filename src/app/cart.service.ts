import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<any[]>([]);

  totalPrice = computed(() => {
    return this.cartItems().reduce((acc, item) => acc + item.price, 0);
  });

  addToCart(product: any) {
    this.cartItems.update(items => [...items, product]);
  }

  removeFromCart(productId: number) {
    this.cartItems.update(items => items.filter(item => item.id !== productId));
  }

  constructor() { }
}
