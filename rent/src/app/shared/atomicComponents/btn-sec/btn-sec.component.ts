import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-sec',
  template: '<button class="btn">{{text}}</button>',
  styleUrls: ['./btn-sec.component.css']
})
export class BtnSecComponent {

  @Input() text: string;

  constructor() {}

}
