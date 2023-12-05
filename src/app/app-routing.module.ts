import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';// Reemplaza con la ubicación correcta de tu componente de administrador

const routes: Routes = [
  {}
  // Otras rutas de tu aplicación
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
