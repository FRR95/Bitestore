import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
@Component({
  selector: 'app-sign-in-user',
  templateUrl: './sign-in-user.component.html',
  styleUrls: ['./sign-in-user.component.css'],
  animations: [
    trigger('foobar', [
      state('show', style({opacity: 1,transform: "translateX(0)"})),
      state('hide', style({opacity: 0,transform: "translateX(-100%)"})),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
]
})
export class SignInUserComponent implements OnInit {
  state= 'hide';
  users: any;
  usuario = {
    email: '',
    password: '',
    name: ''
  }



  constructor(private conexion:ConexionService,private router: Router,private firestore: AngularFirestore) { }

  registrarse() { 
    const { email, password } = this.usuario;
    this.conexion.SignIn(email, password).then(user => {
      console.log("se registro: ", user);
  
      let lista = [...this.users];
      let existe = lista.find(user => user.email == email);

      if (!existe) {
        console.log("USUARIO NUEVO CREADO");
        this.conexion.crear('users', this.usuario);
      };

      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err)
    })
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout( () => {
      this.state = 'show';
    }, 200);
     
    }
  

}
