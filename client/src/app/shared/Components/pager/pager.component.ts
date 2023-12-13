import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit{
  @Input() totalCount: number = 0
  @Input() pageSize?: number = 0
  @Output() pageChange = new EventEmitter<number>()

  constructor() { }

  ngOnInit(){

  }

  onPagerChange(event: any){
    this.pageChange.emit(event.page)
  }
}
