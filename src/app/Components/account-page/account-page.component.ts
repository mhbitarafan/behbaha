import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../Services/general.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  constructor(public general: GeneralService) { }

  ngOnInit() {
    this.general.showFilters = false;
  }

}
