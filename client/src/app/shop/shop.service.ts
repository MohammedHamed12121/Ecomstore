import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';
import { IProductBrand } from '../shared/models/productBrand';
import { IProductType } from '../shared/models/productType';
import { map } from 'rxjs';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:5004/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();
    if (shopParams.brandId !== 0){
      params = params.append('brandId', shopParams.brandId.toString());
    }
    if(shopParams.typeId !== 0){
      params=params.append('typeId', shopParams.typeId.toString());
    }

    // if(shopParams.search){
      params = params.append('search', shopParams.search)
    // }

    params = params.append('sort', shopParams.sort)
    params = params.append('pageIndex', shopParams.pageNumber.toString())
    params = params.append('pageIndex', shopParams.pageSize.toString())

    return this.http.get<IPagination>(this.baseUrl + 'Products/Products?PageSize=50&', {observe: 'response', params}).pipe(
      map(response => {
        return response.body;
      })
    )
  }

  getProductBrands(){
    return this.http.get<IProductBrand[]>(this.baseUrl + 'Products/brands');
  }

  getProductTypes(){
    return this.http.get<IProductType[]>(this.baseUrl + 'Products/types');
  }

}