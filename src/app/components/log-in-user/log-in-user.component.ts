import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-log-in-user',
  templateUrl: './log-in-user.component.html',
  styleUrls: ['./log-in-user.component.css'],
  animations: [
    trigger('foobar', [
      state('show', style({opacity: 1,transform: "translateX(0)"})),
      state('hide', style({opacity: 0,transform: "translateX(-100%)"})),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
]
})
export class LogInUserComponent implements OnInit {
  state= 'hide';

  usuario = {
    email: '',
    password: '',
    
  }

  constructor(private conexion: ConexionService, private router: Router , private firebase: AngularFirestore) { }
  Ingresar() {
    
    const { email, password } = this.usuario;
    this.conexion.login(email, password).then(user => {
      console.log("Bienvenido ", user);
      
      
      if(!user) {
        alert("Datos incorrectos, si no tenes cuenta registrate!");
        
      };
      this.router.navigate(['/']);
     
      
    }).catch(err=>{
      console.log(err)
    })
  }

  ngOnInit() {

    
  }
  ngAfterViewInit() {
    
    setTimeout( () => {
      
      this.state = 'show';
    }, 20);
    
     
    }
}
