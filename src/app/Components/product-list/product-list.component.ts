import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../Services/general.service';
import {ProductService} from '../../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public general: GeneralService, public product: ProductService) { }

  ngOnInit() {
  }

}
