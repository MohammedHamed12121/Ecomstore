import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';
import { IProductBrand } from '../shared/models/productBrand';
import { IProductType } from '../shared/models/productType';
import { map } from 'rxjs';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams){
    let params = new HttpParams();
    if (shopParams.brandId !== 0){
      params = params.append('brandId', shopParams.brandId.toString());
      console.log(shopParams.brandId)
    }
    if(shopParams.typeId !== 0){
      params=params.append('typeId', shopParams.typeId.toString());
    }

    params = params.append('search', shopParams.search)

    params = params.append('sort', shopParams.sort)
    params = params.append('pageIndex', shopParams.pageNumber.toString())
    params = params.append('pageSize', shopParams.pageSize.toString())

    return this.http.get<IPagination>(this.baseUrl + 'Products/Products?', {observe: 'response', params}).pipe(
      map(response => {
        return response.body;
      })
    )
  }

  getProduct(id: number){
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

  getProductBrands(){
    return this.http.get<IProductBrand[]>(this.baseUrl + 'Products/brands');
  }

  getProductTypes(){
    return this.http.get<IProductType[]>(this.baseUrl + 'Products/types');
  }

}
