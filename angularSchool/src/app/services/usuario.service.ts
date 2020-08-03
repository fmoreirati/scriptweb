import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private conn: string = environment.localDB;
  private colletion: string = "usuario";
  constructor(
    private http: HttpClient,
  ) { }

  public add(usuario: Usuario) {
    //http:locahost:3000/usuario
   return this.http.post(this.conn + this.colletion, usuario);
  }
}
