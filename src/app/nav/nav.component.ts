import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { HorarioParqueComponent } from './horario-parque/horario-parque.component';
import { LotacaoComponent } from './lotacao/lotacao.component';
import { DolarComponent } from './dolar/dolar.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  mostrarLotacao() {
    this.modalRef = this.modalService.show(LotacaoComponent);
  }

  mostrarDolar() {
    this.modalRef = this.modalService.show(DolarComponent);
  }

  mostrarHorario() {
    this.modalRef = this.modalService.show(HorarioParqueComponent);
  }

  mostrarTemperatura() {
    this.modalRef = this.modalService.show(TemperaturaComponent);
  }
}
