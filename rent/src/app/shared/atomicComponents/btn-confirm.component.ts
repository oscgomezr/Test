import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-confirm',
  template: `<button class="btn">{{text}}</button>`,
  styles: [`
  .btn{
    padding: 5px 10px;
    border: none;
    border-radius: 2px;
    background-color: #3d4ef4;
    color:white;
  }
  `]
})
export class BtnConfirmComponent {

  @Input() text: string;

  constructor() { }

}
