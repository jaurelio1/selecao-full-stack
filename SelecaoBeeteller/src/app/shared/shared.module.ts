import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRIMENG_IMPORTS } from './primeng-imports';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PRIMENG_IMPORTS
  ],
  exports: [
    PRIMENG_IMPORTS
  ]
})
export class SharedModule { }
