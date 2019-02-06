import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../Services/general.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public general: GeneralService) { }
  ngOnInit() {
  }
close() {
    this.general.showNotification = false;
}
}
