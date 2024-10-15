import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment';
import { Products } from '@shared/models/product.interface';
import { tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsService {
  constructor() {
    this.getProducts();

  }

  //getProducts
  //getProductsById

  public products = signal<Products[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;


  public getProducts() : void {

    this._http.get<Products[]>(`${this._endPoint}/products/?sort=desc`)
    .pipe(
      tap(
        (data:Products[]) => this.products.set(data)))
    .subscribe();
  }

  public getProductById (id : number){
    return this._http.get<Products>(`/products/${this._endPoint}/${id}`)
  }

}
