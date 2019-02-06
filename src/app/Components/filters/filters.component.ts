import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  selected = 'all';
  toppings = new FormControl();
  toppingList = [{name: 'میوه جات'}, {name: 'سبزیجات'}, {name: 'صیفی جات'}, {name: 'خشکبار و آجیل'}];
  SelectedCategories = ['همه محصولات', 'میوه جات', 'سبزیجات', 'صیفی جات', 'خشکبار و آجیل'];
  constructor() { }

  ngOnInit() {
  }
  compareWithFunc(a, b) {
    return a === b;
  }
  toggle() {
    const a = this.SelectedCategories;
    const b = a.includes('میوه جات') && a.includes('سبزیجات') && a.includes('صیفی جات') && a.includes('خشکبار و آجیل');
    if (b) {
      this.SelectedCategories = ['همه محصولات', 'میوه جات', 'سبزیجات', 'صیفی جات', 'خشکبار و آجیل'];
    } else {
      const index = this.SelectedCategories.indexOf('همه محصولات');
      if (index > -1) {
        this.SelectedCategories = this.SelectedCategories.splice(1, 4);
      }
    }
  }
  toggleAll() {
    const a = this.SelectedCategories;
    const b = a.includes('میوه جات') && a.includes('سبزیجات') && a.includes('صیفی جات') && a.includes('خشکبار و آجیل');
    if (b) {
      this.SelectedCategories = [];
    } else {
      this.SelectedCategories = ['همه محصولات', 'میوه جات', 'سبزیجات', 'صیفی جات', 'خشکبار و آجیل'];
    }
  }
}
