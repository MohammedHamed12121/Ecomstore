import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Breadcrumb } from 'xng-breadcrumb/lib/types/breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit{
  breadcrumb$?: Observable<any[]>

  constructor(public bcService: BreadcrumbService){ }
  ngOnInit(): void {
    this.breadcrumb$ = this.bcService.breadcrumbs$
  }

}
