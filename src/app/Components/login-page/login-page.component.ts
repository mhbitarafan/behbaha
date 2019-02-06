import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {GeneralService} from '../../Services/general.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public general: GeneralService) { }

  ngOnInit() {
    this.general.showFilters = false;
  }
}
