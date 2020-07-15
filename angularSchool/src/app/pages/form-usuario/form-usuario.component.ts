import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario'

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  
  user:Usuario = new Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
