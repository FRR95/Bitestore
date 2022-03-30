import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged = this.conexion.getUserLogged();

  constructor(private conexion: ConexionService, private router: Router) { }

  ngOnInit(): void {
  }
  logOut(){
    this.conexion.logout();
    this.router.navigate(['/']);
    }
}
