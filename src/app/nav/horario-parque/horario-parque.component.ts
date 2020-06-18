import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-horario-parque',
  templateUrl: './horario-parque.component.html',
  styleUrls: ['./horario-parque.component.css'],
})
export class HorarioParqueComponent implements OnInit {
  constructor(
    private modalRef: BsModalRef
  ) {}

  ngOnInit(): void {}

  ocultar() {
    console.log(this.modalRef);
    this.modalRef.hide();
  }
}
