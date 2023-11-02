import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortafolioComponent } from './admin-portafolio/admin-portafolio.component'; // Reemplaza con la ubicación correcta de tu componente de administrador

const routes: Routes = [
  { path: 'admin/portafolio', component: AdminPortafolioComponent }
  // Otras rutas de tu aplicación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
