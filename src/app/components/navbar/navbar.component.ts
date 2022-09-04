import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%,0,0)'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ]),
  ]
})
export class NavbarComponent implements OnInit {
  userLogged = this.conexion.getUserLogged();
  menuState:string = 'out';

  constructor(private conexion: ConexionService, private router: Router) { }

  ngOnInit(): void {
  }
  logOut(){
    this.conexion.logout();
    this.router.navigate(['/']);
    }

    toggleMenu(){
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
}
