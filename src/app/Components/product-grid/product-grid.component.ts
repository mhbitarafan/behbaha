import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../Services/general.service';
import {ProductService} from '../../Services/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  constructor(public general: GeneralService, public product: ProductService) { }

  ngOnInit() {
  }

}
