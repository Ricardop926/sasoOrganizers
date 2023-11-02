import { Component, OnInit } from '@angular/core';
import {DataService } from '../services/data.service';


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class  PortafolioComponent implements OnInit {
  constructor(public cs: DataService){


}
ngOnInit(): void {
  
}
}
