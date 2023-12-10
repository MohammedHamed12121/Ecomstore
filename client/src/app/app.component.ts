import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { IPagination } from './models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'ECOMSTORE';
  products: IProduct[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5004/api/Products/Products?PageSize=50&Sort=desc&Search=d').subscribe(
      (response : any) =>{
        this.products = response.data;
      }, error => {
        console.log(error);
      }
    )
  }
}
