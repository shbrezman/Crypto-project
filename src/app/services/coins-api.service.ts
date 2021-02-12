import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { coinCardModel } from '../models/coin.model';

@Injectable({
  providedIn: 'root'
})
export class CoinsApiService{

  constructor(private http: HttpClient) { }

  coins: coinCardModel[] = [];
  baseApiPath = 'https://api.coingecko.com/api/v3/coins/';



  getCoinsList(): Observable<object>{
    return this.http.get(this.baseApiPath + 'list');
  }

  getCoinData(id: string): Observable<object>{
    return this.http.get(this.baseApiPath + id);
  }

}
