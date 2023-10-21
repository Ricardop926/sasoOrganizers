import { Injectable } from '@angular/core';
 import {  HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  newServices: any[] = []
  newPdata: any[] = []

  constructor(private http : HttpClient ) {

    this.cargarServicios();
    this.cargarPData();
    
   }
   private cargarServicios(){
    this.http.get('http://localhost:8000/portfolio/getServices')
    .subscribe((resp : any)=>{
      this.newServices = resp;
      console.log(resp);
      
    })
}

private cargarPData(){
  this.http.get('http://localhost:8000/portfolio/getPData')
  .subscribe((resp : any)=>{
    this.newPdata = resp;
    console.log(resp);
    
  })
}

}

