import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { IProductBrand } from '../shared/models/productBrand';
import { IProductType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  @ViewChild('search', {static: true}) searchTerm?: ElementRef
  products?: IProduct[]
  brands?: IProductBrand[]
  types?: IProductType[]
  totalCount?:number;
  shopParams = new ShopParams()
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price Low to High', value: 'priceAsc'},
    {name: 'Price High to Low', value: 'priceDesc'}
  ]

  constructor(private shopServices: ShopService){}

  ngOnInit(){
    this.getProducts()
    this.getBrands()
    this.getTypes()
  }

  getProducts(){
    this.shopServices.getProducts( this.shopParams).subscribe(response => {
      console.log(response)
      this.products = response?.data
      this.shopParams.pageNumber = response!.pageIndex
      this.shopParams.pageSize = response!.pageSize
      this.totalCount = response!.count
      this.products = response?.data
    }, error => {
      console.log(error)
    });
  }

  getBrands(){
    this.shopServices.getProductBrands().subscribe(response =>{
      this.brands = [{id:0, name:'All'},...response];
    },error =>{
      console.log(error);
    })
  }

  getTypes(){
    this.shopServices.getProductTypes().subscribe(response =>{
      this.types = [{id:0, name:'All'},...response]

    },error =>{
      console.log(error)
    })
  }

  onBrandSelected(brandId: number){
    this.shopParams.brandId = brandId
    this.shopParams.pageNumber = 1
    this.getProducts()
  }

  onTypeSelected(typeId: number){
    this.shopParams.typeId = typeId
    this.shopParams.pageNumber = 1
    this.getProducts()
  }
  onSortSelected(event: any){

    this.shopParams.sort = event.target.value
    this.getProducts()
  }

  onPageChange(event:any){
    // this if state because when you use paginiation(which you didn't implement yet) causes the request to be sent twice becz of the cange of the count
    if(this.shopParams.pageNumber !== event){
      this.shopParams.pageNumber = event
      this.getProducts()
    }
  }

  onSearch(){
    this.shopParams.search = this.searchTerm?.nativeElement.value
    this.shopParams.pageNumber = 1
    this.getProducts()
  }

  onReset(){
    this.searchTerm!.nativeElement.value = '';
    this.shopParams = new ShopParams()
    this.getProducts()
  }
}
