import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { FilteringService } from 'src/app/services/filtering.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ProductHTTP } from 'src/app/Models/ProductsFilter';

import { Product } from 'src/app/Models/Products';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-store-impresoras',
  templateUrl: './store-impresoras.component.html',
  styleUrls: ['./store-impresoras.component.css'],
  animations: [
    trigger('foobar', [
      state('show', style({opacity: 1,transform: "translateX(0)"})),
      state('hide', style({opacity: 0,transform: "translateX(-100%)"})),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
]
})
export class StoreImpresorasComponent implements OnInit {
  productsfilter!: any;
  filteredProducts!: any[];
  products!: boolean;
  state= 'hide';

  constructor(private conexion:ConexionService,private toastr:ToastrService,private filtering:FilteringService,private fb: FormBuilder,private firestore:AngularFirestore,private http:HttpClient,private el:ElementRef) { }
  userLogged = this.conexion.getUserLogged();
  ngOnInit() {
    this.obtenerproductoshttpfiltered();
  }
  obtenerproductoshttpfiltered() {
    this.conexion.getproducts().subscribe(products => {
      this.productsfilter = products;
       this.filteredProducts =[...this.productsfilter.filter((user: { category:{name: string | any[];} }) => user.category.name.includes('Impresoras laser Color'))];
       this.state= 'show';
    });
    
     
    }

    addtocart(product:ProductHTTP){
      this.conexion.addtocart(product);
      this.toastr.success("Producto añadido a la cesta",'Éxito', {
      "progressBar": true,
      }); 
  
      }
}
