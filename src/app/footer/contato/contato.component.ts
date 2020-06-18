import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Contato } from 'src/app/_models/contato';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {

  contato: Contato;
  registerForm: FormGroup;

  constructor(private alertify: AlertifyService, private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  enviar() {
    this.alertify.success('Sucesso! Sua mensagem foi enviada.');
  }
}
