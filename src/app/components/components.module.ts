import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { DetailOverviewComponent } from './detail-overview/detail-overview.component';



@NgModule({
  declarations: [
    SearchComponent,
    CardComponent,
    DetailOverviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchComponent,
    CardComponent,
    DetailOverviewComponent
  ]
})
export class ComponentsModule { }
