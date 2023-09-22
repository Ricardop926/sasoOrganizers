
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SasoOrganices1Service {

  services: any[] = [];
  dPersonales: any[] = [];
  

  constructor(private http: HttpClient) 
  {
    this.cargarPerfil()
    this.datosPersonales();
    
    
    
   }

   //método
   private cargarPerfil(){
    this.http.get('https://saoorganicesj-default-rtdb.firebaseio.com/servicios.json')
    .subscribe((resp: any) => {
      this.services = resp;
      console.log(resp)
    });

  }

  private datosPersonales(){
    this.http.get('https://saoorganicesj-default-rtdb.firebaseio.com/dPersonals.json')
    .subscribe((resp: any) => {
      this.dPersonales = resp;
      console.log(resp)
    });

  }


}
  

   
  

