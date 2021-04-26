import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-sec',
  template: `<button class="btn">{{text}}</button>`,
  styles: [`
  .btn{
    padding: 5px 10px;
    border: none;
    border-radius: 2px;
    background-color:#52b73c;
    color:white;
  }
  `]
})
export class BtnSecComponent {

  @Input() text: string;

  constructor() {}

}
