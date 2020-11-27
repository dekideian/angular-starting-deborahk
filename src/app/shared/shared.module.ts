import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    StarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    StarsComponent,
    FormsModule
  ]
})
export class SharedModule { }
