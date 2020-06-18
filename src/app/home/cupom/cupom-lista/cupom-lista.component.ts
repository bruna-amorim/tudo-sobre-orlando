import { Component, OnInit } from '@angular/core';
import { Cupom } from 'src/app/_models/cupom';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cupom-lista',
  templateUrl: './cupom-lista.component.html',
  styleUrls: ['./cupom-lista.component.css']
})
export class CupomListaComponent implements OnInit {

  cupons: Cupom[];
  cupom: Cupom;
  urlToJson = 'assets/arquivo/cupom.json';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.cupons = response;
    });
  }

}