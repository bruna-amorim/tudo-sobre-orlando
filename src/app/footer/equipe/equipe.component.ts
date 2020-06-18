import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/_models/equipe';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css'],
})
export class EquipeComponent implements OnInit {
  equipe: Equipe[];
  membro: Equipe;
  urlToJson = './assets/arquivo/equipe.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.equipe = response;
    });
  }
}