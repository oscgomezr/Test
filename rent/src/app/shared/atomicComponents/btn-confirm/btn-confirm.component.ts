import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-confirm',
  template: '<button class="btn">{{text}}</button>',
  styleUrls: ['./btn-confirm.component.css']
})
export class BtnConfirmComponent {

  @Input() text: string;

  constructor() { }

}
