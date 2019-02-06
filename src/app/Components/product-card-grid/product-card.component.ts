import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {GeneralService} from '../../Services/general.service';
import {ProductService} from '../../Services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  constructor(public general: GeneralService, public cookieService: CookieService, ) {
  }

  ngOnInit() {
  }



}
