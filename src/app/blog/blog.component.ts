import { Component, OnInit } from '@angular/core';
import {DataService } from '../services/data.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})



export class  BlogComponent implements OnInit {
  constructor(public cs: DataService){


}
ngOnInit(): void {
  
}
}