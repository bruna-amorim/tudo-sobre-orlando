import { Component, OnInit, Input } from '@angular/core';
import { Equipe } from 'src/app/_models/equipe';

@Component({
  selector: 'app-equipe-card',
  templateUrl: './equipe-card.component.html',
  styleUrls: ['./equipe-card.component.css']
})
export class EquipeCardComponent implements OnInit {
  @Input() equipe: Equipe;

  constructor() { }

  ngOnInit() {
  }

}
