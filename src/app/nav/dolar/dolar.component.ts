import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DolarService } from 'src/app/_services/dolar.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Dolar } from 'src/app/_models/dolar';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css'],
})
export class DolarComponent implements OnInit {

  dolar: Dolar;
  dolarValor: string;

  constructor(
    private dolarService: DolarService,
    private alertifyService: AlertifyService,
    private modalRef: BsModalRef
  ) {}

  ngOnInit() {
    return this.dolarService.getDolar().subscribe(
      (data: any) => {
        this.dolar = data.USD;
        this.dolarValor = formatter.format(Number(this.dolar.high));
      },
      (error) => {
        this.alertifyService.error('Erro ao obter o valor do dólar!');
      }
    );
  }

  ocultar() {
    this.modalRef.hide();
  }
}

const formatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});