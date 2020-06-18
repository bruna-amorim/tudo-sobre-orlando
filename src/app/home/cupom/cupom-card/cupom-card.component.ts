import { Component, OnInit, Input } from '@angular/core';
import { Cupom } from 'src/app/_models/cupom';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-cupom-card',
  templateUrl: './cupom-card.component.html',
  styleUrls: ['./cupom-card.component.css'],
})
export class CupomCardComponent implements OnInit {
  @Input() cupom: Cupom;

  constructor(private alertifyService: AlertifyService) {}

  ngOnInit() {}

  alerta() {
    this.alertifyService.success(
      'Você obteve o cupom da loja: ' + this.cupom.loja + '!'
    );
  }
}
