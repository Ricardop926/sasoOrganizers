import { Component, OnInit } from '@angular/core';
import { SasoOrganices1Service } from '../services/saso-organices1.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  constructor(public so: SasoOrganices1Service){

  }
  ngOnInit():void{

  }

}
