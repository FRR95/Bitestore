import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/Models/Products';
import { ConexionService } from 'src/app/services/conexion.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from "rxjs/operators";
import { Observable } from 'rxjs'
import { ProductHTTP } from 'src/app/Models/ProductsFilter';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  
  imgSrc!: string;
  isSubmitted!: boolean;
  selectedImage: any = null;
  form: FormGroup;
  loading = false;
  imgdefault = false;
  products: Product[] = [];
  products1: ProductHTTP[] = [];
  formValue:any;
  images!: Observable<any[]>;
  url !: Observable<any[]>;
  productsfilter!: any;
  filteredProducts!: any[];
  
  constructor(private fb: FormBuilder,private conexion:ConexionService,private toastr:ToastrService,private storage:AngularFireStorage) { 
    this.form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
    shortdescription: ['', [Validators.required, Validators.minLength(16)]],
    longdescription: ['', [Validators.required, Validators.minLength(16)]],
    price: ['', [Validators.required, Validators.minLength(3)]],
    iva: ['', [Validators.required, Validators.minLength(2)]],
    sku: ['', [Validators.required, Validators.minLength(16)]],
    stock: ['', [Validators.required, Validators.minLength(4)]],
    category: ['', [Validators.required, Validators.minLength(1)]],
    image:['', [Validators.required, Validators.minLength(16)]],
    })
    
  }
 
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      this.imgdefault = true;
    }
    else {
      this.imgdefault = false;
      this.selectedImage = null;
    }
  }
subirproducto(formValue:any) {
  this.isSubmitted = true;
  var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
 const fileRef = this.storage.ref(filePath);




    this.loading = true;


    this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          
           this.loading = false;
          formValue['image'] = url;
          console.log(formValue['image']);
          
          const PRODUCTS:  ProductHTTP = {
            name: this.form.value.name,
            description:{
              short: this.form.value.shortdescription,
              long: this.form.value.longdescription,
            },
            price: this.form.value.price,
            iva: this.form.value.iva,
            sku: this.form.value.sku,
            stock: this.form.value.stock,
            category:{
              name: this.form.value.category
            },
            picture:formValue['image']
          }
          
          this.conexion.subirproducto(PRODUCTS);
          
          this.form.reset();
          this.imgdefault = false;
          
       
        })
      })
    ).subscribe();
  }




  ngOnInit(){
   

  }

}
