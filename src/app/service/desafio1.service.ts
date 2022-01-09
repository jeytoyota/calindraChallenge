import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../desafio1/product';
import { Observable } from 'rxjs';

const url =
    'https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook';

@Injectable({
  providedIn: 'root'
})
export class Desafio1Service {

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllProducts(){
    return this.httpClient.get(url)
  }
}


