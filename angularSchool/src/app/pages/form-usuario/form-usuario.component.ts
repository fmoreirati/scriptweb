import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  user: Usuario = new Usuario;
  confpws: string = "";

  constructor() { }

  ngOnInit(): void {
    this.user.ativo = true;
  }

  onsubmit(form) {
    console.log("Usuario:", this.user, "Formulario:", form);
    if (form.invalid) {
      alert("Erro")
    } else {
      alert("Cadastrado!")
    }
  }
}
