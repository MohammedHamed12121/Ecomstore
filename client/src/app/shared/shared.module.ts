import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingHeaderComponent } from './Components/paging-header/paging-header.component';
import { PagerComponent } from './Components/pager/pager.component';



@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagingHeaderComponent,
    PagerComponent
  ]
})
export class SharedModule { }

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { PagerComponent } from './pager/pager.component';

// // import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
// // import { PagerComponent } from './components/pager/pager.component';


// @NgModule({
//   declarations: [PagerComponent],
//   imports: [
//     CommonModule,
   

//   ],
//   exports: [
    
//     // PagingHeaderComponent,
//     PagerComponent
//   ]
// })
// export class SharedModule {}