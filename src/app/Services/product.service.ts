import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {GeneralService} from './general.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private cookieService: CookieService, private general: GeneralService) { }
  private cartMulti: string;
  private updatedCart = '';
  isUnique = true;
  private indexof_Cart: any;
  addtoCart(title, price, amount) {
    const Amount = amount.value;
    const Title = title.innerHTML;
    const Price = price.innerHTML.match(/\d+/)[0];
    const cart = [{'title': Title, 'price': Price, 'amount': Amount}];
    if (Amount === '') {
      alert('لطفا مقدار سفارش را وارد کنید');
      return;
    }
    // first time create cart cookie
    if (!this.cookieService.check('cart')) {
      this.cookieService.set('cart', JSON.stringify(cart));
      // cart cookie already exists
    } else {
      const cart_cookie = this.cookieService.get('cart');
      const cart_cookie_obj = JSON.parse(cart_cookie);
      // check if item already exists in cart
      for (const item of cart_cookie_obj) {
        if (Title === item.title) {
          this.indexof_Cart = cart_cookie_obj.indexOf(item);
          break;
        } else {
          this.indexof_Cart = -1;
        }
      }
      // add new product to cart
      if (this.indexof_Cart === -1) {
        cart_cookie_obj.push({'title': Title, 'price': Price, 'amount': Amount});
        // change product amount in cart
      } else {
        cart_cookie_obj[this.indexof_Cart].amount = Amount;
      }
      this.cookieService.set('cart', JSON.stringify(cart_cookie_obj));
    }
    const message = Title + ' با موفقیت به سبد خرید افزوده شد';
    this.general.Notification(message, true);
  }
}
