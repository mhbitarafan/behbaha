import {Component, HostListener} from '@angular/core';
import {GeneralService} from './Services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'behbaha';
  constructor(public general: GeneralService) {}
}
