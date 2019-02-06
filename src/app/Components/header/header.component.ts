import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {GeneralService} from '../../Services/general.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public general: GeneralService, private cookieService: CookieService) { }
  @ViewChild('navbar') navbar: ElementRef;
showFilters = false;
showSearchbar = false;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.general.headerHeight = this.navbar.nativeElement.offsetHeight;
    if (!this.general.isTablet()) {
      this.general.showSidebar = false;
      this.general.showCat = false;
      this.general.showFilters = false;
      this.general.showGrid = false;
      this.general.showList = true;
    } else {
      this.general.remainingHeight = window.innerHeight - this.general.headerHeight;
      if (this.cookieService.get('viewTemplate') === 'list') {
        this.general.showGrid = false;
        this.general.showList = true;
      } else {
        this.general.showGrid = true;
        this.general.showList = false;
      }
    }
  }
  ngOnInit() {
    this.general.headerHeight = this.navbar.nativeElement.offsetHeight;
    if (!this.general.isTablet()) {
      this.general.showSidebar = false;
      this.general.showGrid = false;
      this.general.showList = true;
    } else {
      this.general.remainingHeight = window.innerHeight - this.general.headerHeight;
      if (this.cookieService.get('viewTemplate') === 'list') {
        this.general.showGrid = false;
        this.general.showList = true;
      } else if (this.cookieService.get('viewTemplate') === 'grid') {
        this.general.showGrid = true;
        this.general.showList = false;
      } else {
        this.general.showGrid = false;
        this.general.showList = true;
      }
    }
  }
toggleFilter() {
  this.showFilters = this.showFilters === false ? true : false;
}
toggleSearch() {
  this.showSearchbar = this.showSearchbar === false ? true : false;
}
}
