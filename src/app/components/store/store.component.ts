import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';

import { FilteringService } from 'src/app/services/filtering.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ProductHTTP } from 'src/app/Models/ProductsFilter';

import { Product } from 'src/app/Models/Products';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products: ProductHTTP[] = [];
  productsCUSTOM: ProductHTTP[] = [];
  loading = true;
  formValue:any;
  productsfilter!: any;
  filteredProducts!: any[];


  constructor(private conexion:ConexionService,private toastr:ToastrService,private filtering:FilteringService,private fb: FormBuilder,private firestore:AngularFirestore,private http:HttpClient) {
   

   
   }
  userLogged = this.conexion.getUserLogged();
  
 

ngOnInit() {
this.obtenerproductoshttp();
this.obtenerproductosCUSTOM();
this.obtenerproductoshttpfiltered1();
}

  obtenerproductosCUSTOM() {
    this.loading = true;
    this.conexion.obtenerproductos().subscribe(doc => {
      this.productsCUSTOM = [];
     
      doc.forEach((element: any) => {
        this.productsCUSTOM.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
        
      });
      
      this.loading = false;
    })
  }
  
  obtenerproductoshttp() {
  this.loading = true;
  this.conexion.getproducts().subscribe(doc=>{
    this.products=doc;
   this.loading = false;
  
  });
   
  }




  obtenerproductoshttpfiltered1() {
    this.conexion.getproducts().subscribe(products => {
      this.productsfilter = products;
       this.filteredProducts =[...this.productsfilter.filter((user: { category:{name: string | any[];} }) => user.category.name.includes('Portátiles'))];
    });
     
    }
  
  

    addtocart(product:ProductHTTP){
    this.conexion.addtocart(product);
    this.toastr.success("Producto añadido a la cesta",'Éxito', {
    "progressBar": true,
    }); 

    }




}
