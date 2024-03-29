import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpHeaders } from '@angular/common/http';
import { AngularFireModule} from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AngularFireStorageModule,
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
  
 } from "@angular/fire/compat/storage";

 //AngularMat
 import { MatSliderModule } from '@angular/material/slider';
 import { MatSidenavModule } from '@angular/material/sidenav';
 import { MatTableModule } from '@angular/material/table';
 import { MatToolbar } from '@angular/material/toolbar';
 import { MatTabsModule } from '@angular/material/tabs';
 import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;









import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage,ref } from '@angular/fire/storage';


//Componenents
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SignInUserComponent } from './components/sign-in-user/sign-in-user.component';
import { LogInUserComponent } from './components/log-in-user/log-in-user.component';
import { StoreComponent } from './components/store/store.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { NavmenusideComponent } from './components/navmenuside/navmenuside.component';
import { CovidStatsComponent } from './components/covid-stats/covid-stats.component';
import { StoreDiscosDurosComponent } from './components/store-discos-duros/store-discos-duros.component';
import { StoreImpresorasComponent } from './components/store-impresoras/store-impresoras.component';
import { StorePortatilesComponent } from './components/store-portatiles/store-portatiles.component';
import { StoreTecladosComponent } from './components/store-teclados/store-teclados.component';
import { EmptysearchcomponentComponent } from './components/emptysearchcomponent/emptysearchcomponent.component';



//

//Services
import { ConexionService } from 'src/app/services/conexion.service';
import { LoadingpageComponent } from './components/loadingpage/loadingpage.component';





//

const rutas: Routes = [
  { path: '', component:StoreComponent },
  { path: 'SignIn', component:SignInUserComponent },
  { path: 'logIn', component:LogInUserComponent },
  { path: 'Store', component:StoreComponent},
  { path: 'Store/Teclados USB', component:StoreTecladosComponent},
  { path: 'Store/Discos duros externos', component:StoreDiscosDurosComponent},
  { path: 'Store/Portátiles', component:StorePortatilesComponent},
  { path: 'Store/Impresoras laser color', component:StoreImpresorasComponent},


  { path: 'AddProduct', component:AddProductFormComponent},
  { path: 'Cart', component:AddToCartComponent},
  { path: 'Navsidemenu', component:NavmenusideComponent},
  { path: 'CovidStats', component:CovidStatsComponent},
  
  
  { path: 'ProductDetails/:id/:name/:descriptionshort/:details/:iva/:price/:image', component:ProductDetailsComponent },
 

  
  
  
  
  { path: '**',redirectTo:'/' ,pathMatch:'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainMenuComponent,
    SignInUserComponent,
    LogInUserComponent,
    StoreComponent,
    ProductDetailsComponent,
    AddToCartComponent,
    AddProductFormComponent,
    NavmenusideComponent,
    LoadingpageComponent,
    CovidStatsComponent,
    CanvasJSChart,
    StoreDiscosDurosComponent,
StoreImpresorasComponent,
StorePortatilesComponent,
StoreTecladosComponent,
EmptysearchcomponentComponent,

  
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(rutas),
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatSliderModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule
 ],
  exports:[
    BrowserModule,
    RouterModule,

  ],
  providers: [
    ScreenTrackingService,UserTrackingService,ConexionService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
