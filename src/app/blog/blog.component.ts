import { Component,OnInit } from '@angular/core';
import { SasoOrganices1Service } from '../services/saso-organices1.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  constructor(public so: SasoOrganices1Service){

  }
  ngOnInit():void
  {

  }



}