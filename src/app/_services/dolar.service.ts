import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dolar } from '../_models/dolar';

@Injectable({
  providedIn: 'root',
})
export class DolarService {
  baseUrl = 'https://economia.awesomeapi.com.br/all/USD-BRL';

  constructor(private http: HttpClient) {}

  getDolar() {
    return this.http.get<Dolar>(this.baseUrl);
  }
}
