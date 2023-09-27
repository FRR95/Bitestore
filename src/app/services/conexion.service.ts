import { Injectable } from '@angular/core';
import { ProductHTTP } from 'src/app/Models/ProductsFilter';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject,Observable,map } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';












@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  products: ProductHTTP[] = [];
 
  filteredProducts!: any[];
  productsfilter!: any;

  private count = 0;
  private spinner$ = new BehaviorSubject<string>('');


  constructor(private firestore:AngularFirestore,private afauth: AngularFireAuth,private http:HttpClient,private firedata:AngularFireDatabase) {

    
   }
  authData?:any;
 
  


  // INICIO DE SESION,REGISTRO Y CERRAR SESIÓN

  async SignIn(email: string, password: string) {
    try {
      
      const data= await this.afauth.createUserWithEmailAndPassword(email, password); 
      this.authData= data.user?.uid;
      console.log(data);
      return data;
    } 
    
    catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }
  public crear(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }

  async login(email: string, password: string) {
    
    try {
      const data= await this.afauth.signInWithEmailAndPassword(email, password);
      this.authData= data.user?.uid;
      console.log(data);
      return data;
     
    } 
  catch (err) {
      console.log("error en login: ", err);
      return null;
    }
}
getUserLogged() {
  return this.afauth.authState;
  
}

logout() {
  this.afauth.signOut();
  this.authData= undefined;
}
  //

  //SUBIR PRODUCTOS

 subirproducto(products: ProductHTTP) {

  return this.firestore.collection('products').add(products);

     
   }

  obtenerproductos(): Observable<any> {
    
    return this.firestore.collection('products').snapshotChanges();
  }


  obtenermisproductos() {
    
    return this.products;
  }


  addtocart(product:ProductHTTP){
    this.products.push(product);
  }

    clearCart() {
      this.products = [];
      return this.products;
    }
    
getproducts(){
return this.http.get<any>('https://api.biteindustry.es/products',{headers:{Authorization:'*CdY2)x4|]<uv9V)-{^W6[j#c'}})
}

get_covid_data(){
  return this.http.get<any>('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
}
get_covid_data_chart(){
  return this.http.get<any>('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true',  {
    responseType: 'json',
  })
}





  //

  //LOADING PAGE
  
  getSpinnerObserver(): Observable<string> {
    return this.spinner$.asObservable();
  }

  requestStarted() {
    if (++this.count === 1) {
      this.spinner$.next('start');
    }
  }

  requestEnded() {
    if (this.count === 0 || --this.count === 0) {
      this.spinner$.next('stop');
    }
  }

  resetSpinner() {
    this.count = 0;
    this.spinner$.next('stop');
  }
  
  //









}
