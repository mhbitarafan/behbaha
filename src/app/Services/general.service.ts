import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
showSidebar = true;
showCat = false;
showFilters = false;
showGrid = false;
showList = true;
productlist: any;
per_page = 12;
  constructor(private cookieService: CookieService) { }
headerHeight = 0;
footerHeight = 0;
remainingHeight = 0;
message = '';
showNotification = false;
Notification(message, autoHide) {
  this.showNotification = true;
  this.message = message;
  if (autoHide) {
    setTimeout(() => {
      this.showNotification = false; }, 4000);
  }
  }
isMobile() {
  if (window.innerWidth < 576) {
    return true;
  }
  return false;
  }
isTablet() {
    if (window.innerWidth >= 880) {
      return true;
    }
  return false;
  }
isDesktop() {
    if (window.innerWidth >= 1100) {
      return true;
    }
    return false;
  }
 isDesktopXL() {
    if (window.innerWidth >= 1420) {
      return true;
    }
   return false;
  }
toggleSidebar() {
  if (this.showFilters === true || this.showCat === true) {
    this.showSidebar = true;
  } else {
    this.showSidebar = false;
  }
}
showFilterbar() {
  this.showFilters = this.showFilters === true ? false : true;
  this.showCat = false;
}
showCatbar() {
  this.showCat = this.showCat === true ? false : true;

  this.showFilters = false;
}
gridView() {
  this.showGrid = true;
  this.showList = false;
  if (!this.cookieService.check('viewTemplate')) {
    this.cookieService.set('viewTemplate', 'grid');
  } else {
    if (this.cookieService.get('viewTemplate') !== 'grid') {
      this.cookieService.set('viewTemplate', 'grid');
    }
  }
}
listView() {
  this.showGrid = false;
  this.showList = true;
  if (!this.cookieService.check('viewTemplate')) {
    this.cookieService.set('viewTemplate', 'list');
  } else {
    if (this.cookieService.get('viewTemplate') !== 'list') {
      this.cookieService.set('viewTemplate', 'list');
    }
  }
}
}
