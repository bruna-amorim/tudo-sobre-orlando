import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Temperatura } from '../_models/temperatura';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  baseUrl = 'http://apidev.accuweather.com/currentconditions/v1/';
  uRL = 'http://apidev.accuweather.com/currentconditions/v1/328169.json?language=pt&apikey=hoArfRosT1215';

constructor(private http: HttpClient) { }

  getTemperatura(id: number, language?) {
    let params = new HttpParams();

    if (language !== null) {
      params = params.append('language', language);
    } else {
      params = params.append('language', 'pt');
    }

    params.append('apikey', 'hoArfRosT1215');

    // return this.http.get<Temperatura>(this.baseUrl + id + '.json', {params});
    return this.http.get<Temperatura[]>(this.uRL);
  }

}
