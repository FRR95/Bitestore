import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AnyMxRecord } from 'dns';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userLogged = this.conexion.getUserLogged();

  constructor(private el:ElementRef,private conexion: ConexionService, private router: Router) { }

  ngOnInit(): void {
  }
  @HostListener('click', ['$event.target'])
 

  logOut(){
    this.conexion.logout();
    this.router.navigate(['/']);
    }
}
