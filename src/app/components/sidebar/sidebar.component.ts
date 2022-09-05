import { Component, OnInit, ElementRef, Renderer2, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnyMxRecord } from 'dns';
import { ConexionService } from 'src/app/services/conexion.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userLogged = this.conexion.getUserLogged();
  menuState:string = 'out';
 
 
  

  constructor(private el:ElementRef,private conexion: ConexionService, private router: Router) { }
 
  ngOnInit(): void {
  }
  @HostListener('click', ['$event.target'])
  
 

  logOut(){
    this.conexion.logout();
    this.router.navigate(['/']);
    }
    closeMenu(){
      
    }
}
