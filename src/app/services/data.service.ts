import { Injectable } from '@angular/core';
 import {  HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  newServices: any[] = []
  newPdata: any[] = []
  newBlog : any[] = []
  newProjects: any[] = []

  constructor(private http : HttpClient ) {

    this.cargarServicios();
    this.cargarPData();
    this.cargarBlog();
    this.cargarProyecto();
    
   }
   private cargarServicios(){
    this.http.get('http://52.14.196.192:8080/portfolio/getServices')
    .subscribe((resp : any)=>{
      this.newServices = resp;
      console.log(resp);
      
    })
}

private cargarPData(){
  this.http.get('http://52.14.196.192:8080/portfolio/getPData')
  .subscribe((resp : any)=>{
    this.newPdata = resp;
    console.log(resp);
  })
}

private cargarBlog(){
  this.http.get('http://52.14.196.192:8080/portfolio/getBlog')
  .subscribe((resp : any)=>{
    this.newBlog = resp;
    console.log(resp);
    
  })
}

private cargarProyecto(){
  this.http.get('http://52.14.196.192:8080/portfolio/getProjects')
  .subscribe((resp : any)=>{
    this.newProjects = resp;
    console.log(resp);
    
  })
}
}







