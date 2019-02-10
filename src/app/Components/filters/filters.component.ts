import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {GeneralService} from '../../Services/general.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, AfterViewInit {
  @ViewChild('filters') filters;
  selected = 'all';
  toppings = new FormControl();
  toppingList = [{name: 'میوه جات'}, {name: 'سبزیجات'}, {name: 'صیفی جات'}, {name: 'خشکبار و آجیل'}];
  SelectedCategories = ['همه محصولات', 'میوه جات', 'سبزیجات', 'صیفی جات', 'خشکبار و آجیل'];
  constructor(private general: GeneralService) {
    this.general.filters = this.filters;
  }
  ngOnInit() {
    console.log('this.general.filters');
  }
  ngAfterViewInit(): void {
    console.log('this.general.filters');
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
