import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Products';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 product: Product | undefined;
id:any;
 param1:any;
 productname:any;
 productid:any;
 productdescriptionshort:any;
 productdetails:any;
 productiva:any;
 productprice:any;
 productUrl:any;

constructor(private route: ActivatedRoute,private conexion:ConexionService) {}


  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.productname = this.route.snapshot.paramMap.get('name');
    this.productdescriptionshort = this.route.snapshot.paramMap.get('descriptionshort');
    this.productdetails = this.route.snapshot.paramMap.get('details');
    this.productiva = this.route.snapshot.paramMap.get('iva');
    this.productprice = this.route.snapshot.paramMap.get('price');
    this.productUrl = this.route.snapshot.paramMap.get('image');
  }

  
}
