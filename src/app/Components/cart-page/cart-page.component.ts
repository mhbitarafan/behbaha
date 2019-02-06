import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../Services/general.service';
import {retry} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  price: number;
}


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  private indexof_Cart: any;
  constructor(public general: GeneralService, public cookieService: CookieService) {
    this.general.showFilters = false;
  }
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['priceAll', 'price', 'weight', 'name', 'position', 'remove'];
  dataSource = this.ELEMENT_DATA;
  iscartEmpty = false;
  getCartData() {
    if (!this.cookieService.check('cart')) {
      this.iscartEmpty = true;
      return;
    }
    const cartCookie = this.cookieService.get('cart');
    const cartCookieArr = JSON.parse(cartCookie);
    for (let i = 0; i < cartCookieArr.length; i++) {
      this.ELEMENT_DATA.push({name: cartCookieArr[i].title, position: i + 1, weight: cartCookieArr[i].amount, price: cartCookieArr[i].price});
    }
  }
  getTotal() {
    let total = 0;
    for (let i = 0; i < this.dataSource.length; i++) {
      total += this.dataSource[i].weight * this.dataSource[i].price;
    }
    return total;
  }
  removeFromCart(index) {
    const cartCookie = this.cookieService.get('cart');
    const cartCookieArr = JSON.parse(cartCookie);
    cartCookieArr.splice(index, 1);
    this.ELEMENT_DATA = [];
    for (let i = 0; i < cartCookieArr.length; i++) {
      this.ELEMENT_DATA.push({name: cartCookieArr[i].title, position: i + 1, weight: cartCookieArr[i].amount, price: cartCookieArr[i].price});
    }
    this.dataSource = this.ELEMENT_DATA;
    this.cookieService.set('cart', JSON.stringify(cartCookieArr));
    if (cartCookieArr.length === 0) {
      this.iscartEmpty = true;
      this.cookieService.delete('cart');
    }
  }

  updateCart(index, amount) {
    const cart_cookie = this.cookieService.get('cart');
    const cart_cookie_obj = JSON.parse(cart_cookie);
    cart_cookie_obj[index].amount = amount;
    this.cookieService.set('cart', JSON.stringify(cart_cookie_obj));
  }

  ngOnInit() {
    this.getCartData();
  }

}
