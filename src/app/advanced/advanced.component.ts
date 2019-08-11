import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeAnimation} from '../shared/animations';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
  animations: [
      trigger('changeState', [
          transition('void => *', useAnimation(fadeAnimation))
      ])
  ]
})
export class AdvancedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
