import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { PagedComponent } from './paged/paged.component';



@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagedComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PagedComponent
  ]
})
export class SharedModule { }
