import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Album} from './album';
import { Observable } from 'rxjs/Observable';
import {Product} from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl:string='../assets/album.json';

  private _productsUrl:string='../assets/products.json';

  /**injecting service directely in constructor */
  constructor(private _http: Http) { }

  // returns an observable
  getAlbum(id:number):Observable<Album>{
    return this._http.get(this._albumUrl).map(response => <Album>response.json());
  }
  getProducts():Observable<Product[]>{
    return this._http.get(this._productsUrl).map(response=><Product[]>response.json());
  }

}
