import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Depoimento } from 'src/app/_models/depoimento';

@Component({
  selector: 'app-depoimento',
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.css']
})
export class DepoimentoComponent implements OnInit {

  depoimento: Depoimento;
  registerForm: FormGroup;

  constructor(private alertify: AlertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  enviar() {
    this.alertify.success('Sucesso! Seu depoimento foi enviado.');
  }

}
