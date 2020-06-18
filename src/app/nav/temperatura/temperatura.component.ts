import { Component, OnInit } from '@angular/core';
import { TemperaturaService } from 'src/app/_services/temperatura.service';
import { Temperatura } from 'src/app/_models/temperatura';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css'],
})
export class TemperaturaComponent implements OnInit {
  temperatura: Temperatura;
  iconeUrl: string;

  constructor(
    private modalRef: BsModalRef,
    private temperaturaService: TemperaturaService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit() {
    this.loadTemperatura();
  }

  loadTemperatura() {
    return this.temperaturaService.getTemperatura(328169).subscribe(
      (data: any[]) => {
        this.temperatura = data[0];
        console.log(this.temperatura);
        this.iconeUrl =
          'https://vortex.accuweather.com/adc2010/images/slate/icons/' +
          this.temperatura.WeatherIcon +
          '.svg';
      },
      (error) => {
        this.alertifyService.error('Erro ao obter a temperatura!');
      }
    );
  }

  ocultar() {
    this.modalRef.content = this;
    console.log(this.modalRef);
    this.modalRef.hide();
  }
}
