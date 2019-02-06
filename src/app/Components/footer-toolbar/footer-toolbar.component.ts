import {
  AfterContentChecked,
  AfterViewChecked,
  Component, DoCheck,
  ElementRef,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {GeneralService} from '../../Services/general.service';

@Component({
  selector: 'app-footer-toolbar',
  templateUrl: './footer-toolbar.component.html',
  styleUrls: ['./footer-toolbar.component.css']
})
export class FooterToolbarComponent implements OnInit, AfterViewChecked {
  @ViewChild('footer') footer: ElementRef;
  constructor(public general: GeneralService) { }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (!this.general.isTablet()) {
      this.general.footerHeight = this.footer.nativeElement.offsetHeight;
      this.general.remainingHeight = window.innerHeight - this.general.headerHeight - this.general.footerHeight;
    }
  }
  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    if (!this.general.isTablet()) {
      this.general.footerHeight = this.footer.nativeElement.offsetHeight;
      this.general.remainingHeight = window.innerHeight - this.general.headerHeight - this.general.footerHeight - 30;
    }
  }
}
