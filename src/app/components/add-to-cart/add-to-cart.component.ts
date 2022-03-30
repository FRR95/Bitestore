import { Component, OnInit } from '@angular/core';
import { ProductHTTP } from 'src/app/Models/ProductsFilter';
import { ConexionService } from 'src/app/services/conexion.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  products: ProductHTTP[] = [];
  id: string | undefined;
  

  constructor(private conexion:ConexionService, private router: Router,private toastr:ToastrService) { }
  product= this.conexion.obtenermisproductos();
  clearCart(){
  this.conexion.clearCart();

  
  }

  ReloadPage(){
    this.router.navigate(['/Store']);;
  }
  ngOnInit(): void {
 
  }



}
