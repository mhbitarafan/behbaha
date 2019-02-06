import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {GeneralService} from '../../Services/general.service';
import {ProductQueryService} from '../../Services/product-query.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit, AfterViewChecked {
  public productlist: any[];

  constructor(public general: GeneralService, private query: ProductQueryService) {
    if (!this.general.isMobile()) {
      this.general.showCat = true;
      this.general.showFilters = true;
    }
  }

  ngOnInit() {
    this.query.get_product_list_generic(1, this.general.per_page).subscribe(
      (res) => {
        this.general.productlist = res;
      }
    );
  }

  ngAfterViewChecked(): void {
    if (!this.general.isMobile()) {
      this.general.showCat = true;
      this.general.showFilters = true;
    }
  }

}
