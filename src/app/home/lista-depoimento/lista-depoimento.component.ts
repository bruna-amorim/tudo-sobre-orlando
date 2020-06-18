import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-depoimento',
  templateUrl: './lista-depoimento.component.html',
  styleUrls: ['./lista-depoimento.component.css'],
})
export class ListaDepoimentoComponent implements OnInit {
  slideConfig = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
  };

  constructor() {}

  ngOnInit() {}

  afterChange(e) {
    console.log('afterChange');
  }
}
