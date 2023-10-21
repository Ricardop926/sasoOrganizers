import { Component, OnInit } from '@angular/core';
import {DataService } from '../services/data.service';


@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  constructor(public cs: DataService){


}
ngOnInit(): void {
  
}
}
