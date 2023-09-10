import { Component,OnInit } from '@angular/core';
import { SasoOrganices1Service } from '../services/saso-organices1.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  constructor(public so: SasoOrganices1Service){

  }
  ngOnInit():void{

  }

}
