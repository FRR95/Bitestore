import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-loadingpage',
  templateUrl: './loadingpage.component.html',
  styleUrls: ['./loadingpage.component.css']
})
export class LoadingpageComponent implements OnInit {
  

  constructor(private conexioneservice: ConexionService, private cdRef: ChangeDetectorRef) {
    
   }

  title = 'title';
  //Loader variable default true before page load
  loader = true;
  ngOnInit(): void {
    
     //Loader variable set false after page load
    setTimeout(()=>{                           
      this.loader = false;
  }, 1000);
  }

}
