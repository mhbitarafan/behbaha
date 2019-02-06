import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {GeneralService} from '../../Services/general.service';
import {LabelType, Options} from 'ng5-slider';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  constructor(public general: GeneralService) {
  }
  minValue = 0;
  maxValue = 15000;
  options: Options = {
  step: 500,
    getPointerColor: (value: number): string => {
      return '#000000';
    },
    getSelectionBarColor: (value: number): string => {
      return '#000000';
    },
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + ' تومان ';
        case LabelType.High:
          return value + ' تومان ';
        default:
          return '';
      }
    }
  };
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (!this.general.isMobile()) {
      this.general.showCat = true;
      this.general.showFilters = true;
    }
  }

}
