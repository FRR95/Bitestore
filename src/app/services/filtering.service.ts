import { Injectable } from '@angular/core';
import { Product } from 'src/app/Models/Products';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';


@Injectable({
  providedIn: 'root'
})
export class FilteringService {


private currentCompany = new BehaviorSubject<any>(null);
private companies$: AngularFirestoreCollection<any>;


  constructor(private firestore:AngularFirestore,private afauth: AngularFireAuth,private http:HttpClientModule,private firedata:AngularFireDatabase,private conexion:ConexionService) { 
    this.companies$ = this.firestore.collection('products');
  }


  //SHOW FILTER
  get companies() {
    return this.companies$.valueChanges();
  }

  get selectedCompany() {
    return this.currentCompany.asObservable();
  }

  set selectedCompany(value) {
    this.currentCompany.next(value);
  }

//
}
