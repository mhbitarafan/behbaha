import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AppSettings} from '../AppSettings';

@Injectable({
  providedIn: 'root'
})
export interface ProductName {
  product: any;
};
export class ProductQueryService {
  private price: any;
  private product_name: ProductName;
  private products: any[];
  private image: any;
  constructor(private http: HttpClient) { }
  get_product_list_generic(page, per_page) {
    const url = AppSettings.base_host + '/api/products?output_format=JSON' +
      '&display=[id,name,price,id_default_image]' +
      '&limit=' + (page - 1) * per_page + ',' + per_page +
      '&ws_key=' + AppSettings.api_key;
    return this.http.get(url).pipe(map(
      (product) => {
        this.products = [];
        for (const i in product.products) {
          this.product_name = product.products[i].name[0].value;
          this.price = Math.round(product.products[i].price);
          const pid = product.products[i].id;
          const img_id = product.products[i].id_default_image;
          console.log(img_id);
          this.image = AppSettings.base_host + '/api/images/products/' + pid + '/' + img_id + '?&ws_key=' + AppSettings.api_key
          this.products.push({
            product_name: this.product_name,
            price: this.price,
            img_url: this.image
          });
        }
        return this.products;
      }
    ));
  }
}
