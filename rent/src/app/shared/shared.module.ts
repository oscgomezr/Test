import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnConfirmComponent } from './atomicComponents/btn-confirm/btn-confirm.component';
import { BtnSecComponent } from './atomicComponents/btn-sec/btn-sec.component'

@NgModule({
  declarations: [
    BtnConfirmComponent,
    BtnSecComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    BtnConfirmComponent,
    BtnSecComponent
  ]
})
export class SharedModule { }
