import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userLogged = this.conexion.getUserLogged();
  menuState:string = 'out';
  class:any;
  class1:any;
  sidebar=false;


  constructor(private conexion: ConexionService, private router: Router) {
   this.class='invisible';
   this.class1='visible';

   }

  ngOnInit(): void {
  }
  logOut(){
    this.conexion.logout();
    this.router.navigate(['/']);
    }



    openNav(){
    this.sidebar=true;

   }

   closeNav(){
    this.sidebar=false;
    
   }

   
}
