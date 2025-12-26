import { Component } from '@angular/core';
import { CardsComponent } from "../../ui/cards/cards.component";
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api: ApiService) { }


  categories: any[] = [];
  originalData: any[] = [];
  data: any[] = [];

  ngOnInit() {
    this.api.getProducts().subscribe((res: any) => {
      this.data = res.products;
      this.originalData = res.products;
    });

    this.api.getAllCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  filterCategory(category: string) {
    if (category === 'all') {
      this.data = this.originalData;
    } else {
      this.api.getProductsByCategory(category).subscribe((res: any) => {
        this.data = res.products;
      });
    }
  }

}
