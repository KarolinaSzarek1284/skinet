import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paged',
  templateUrl: './paged.component.html',
  styleUrls: ['./paged.component.scss']
})
export class PagedComponent {
  @Input() totalCount?: number;
  @Input() pageSize?: number;
  @Output() pageChanged = new EventEmitter<number>();

  onPagerChanged(event: any){
    this.pageChanged.emit(event.page);
  }
}
