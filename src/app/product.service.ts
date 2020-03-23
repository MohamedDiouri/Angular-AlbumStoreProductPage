import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl:string='../assets/album.json';

  /**injecting service directely in constructor */
  constructor(private _http: Http) { }

  // returns an observable
  getAlbum(id:Number){
    return this._http.get(this._albumUrl).map(response => response.json());
  }
}
