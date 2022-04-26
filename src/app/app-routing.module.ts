import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path:'', component:BienvenidaComponent},
  {path:'contacto', component:ContactoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
