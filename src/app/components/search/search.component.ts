import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  @Input() orderBy;
  @Input() orderType;

  @Output() queyrEvt = new EventEmitter();
  @Output() orderEvt = new EventEmitter();

  constructor() { }
  handleQuery(query: string) {
    this.queyrEvt.emit(query);
  }
  ngOnInit() {
  }

  handleSort(orderItems) {
    this.orderBy = orderItems.orderBy;
    this.orderType = orderItems.orderType;
    this.orderEvt.emit(orderItems);
  }

}
