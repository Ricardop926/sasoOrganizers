import { Component } from '@angular/core';

import { FormGroup,FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as Notiflix from 'notiflix';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent  {

  datos:FormGroup;
  constructor(private  httpclient: HttpClient){
    this.datos= new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])

    })

  }



  enviocorreo(){
    Notiflix.Loading.standard('Loading...')
    let params = {
      email:   this.datos.value.email,
      subject: this.datos.value.subject,
      message: this.datos.value.message

    }
    console.log(params)
    this.httpclient.post('http://localhost:3000/envio',params).subscribe(resp =>{
      console.log(resp);
      Notiflix.Loading.remove();
      Notiflix.Notify.success("Submitted successfully");
      
    })


  }
  

}
