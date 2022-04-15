import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdEditComponent } from './md-edit.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"



@NgModule({
  declarations: [
    MdEditComponent,
  ],
  exports: [
    MdEditComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})
export class MdEditModule { }
