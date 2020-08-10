import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

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
    private firedb: AngularFirestore
  ) { }

  public add(usuario: Usuario) {
    //http://locahost:3000/usuario
    return this.http.post(this.conn + this.colletion, usuario);
  }

  public getAll() {
    return this.http.get<Usuario[]>(this.conn + this.colletion);
  }

  public get(id) {
    return this.http.get<Usuario>(this.conn + this.colletion + "/" + id);
  }

  public update(usuario: Usuario, key: string) {
    return this.http.put(this.conn + this.colletion + "/" + key, usuario);
  }

  public remove(key) {
    return this.http.delete(this.conn + this.colletion + "/" + key);
  }

  public addFire(usuario: Usuario) {
    return this.firedb.collection(this.colletion).add(
      {
        nome: usuario.nome,
        email: usuario.email,
        pws: usuario.pws,
        ativa: usuario.ativo
      }
    )
  }

  public getAllFire() {
    return this.firedb.collection<Usuario>(this.colletion).snapshotChanges()
      .pipe(
        map(dados => 
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      );
  }
}


