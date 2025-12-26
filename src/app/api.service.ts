import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getProducts() {

    return this.http.get('https://dummyjson.com/products')

  }

  getProductsById(id: any) {

    return this.http.get(`https://dummyjson.com/products/${id}`)

  }

  getAllCategories() {
    return this.http.get('https://dummyjson.com/products/categories');
  }

  getProductsByCategory(category: string) {
    return this.http.get(`https://dummyjson.com/products/category/${category}`);
  }
}
