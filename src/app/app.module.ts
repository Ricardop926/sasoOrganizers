import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';





import { AppComponent } from './app.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ResumenComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent
   
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
