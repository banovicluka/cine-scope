import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { FormsModule } from '@angular/forms';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeViewComponent,
    DetailedViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
  ]
})
export class ViewsModule { }
