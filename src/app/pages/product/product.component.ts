import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(private activated: ActivatedRoute, private api: ApiService, private cartService: CartService) { }
  product: any;
  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get("id");

    this.api.getProductsById(id).subscribe((res: any) => {
      this.product = res;
      console.log(this.product);
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
