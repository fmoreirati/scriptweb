import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email:string = "";
  public pws:string = "";

  constructor(
    private userService:UsuarioService,
    private router:Router
  ) { }

  ngOnInit(): void {

  }

  onsubmit(form){
    this.userService.login(this.email, this.pws).then(
      res=>{
        form.reset();
        this.router.navigate([""]);
       this.userService.auth.currentUser.then(
         res=> console.log(res)
       );
      },
      err=>{
        alert("Usuário não existe!");
        console.error(err);
        
      }
    )
  }

}
