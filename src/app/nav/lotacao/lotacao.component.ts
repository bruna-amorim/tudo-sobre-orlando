import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.css']
})
export class LotacaoComponent implements OnInit {

  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
  }

  ocultar() {
    this.modalRef.hide();
  }

}
