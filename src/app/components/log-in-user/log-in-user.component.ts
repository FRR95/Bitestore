import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-log-in-user',
  templateUrl: './log-in-user.component.html',
  styleUrls: ['./log-in-user.component.css']
})
export class LogInUserComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
