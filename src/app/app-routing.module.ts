import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { SentimientoComponent } from './sentimiento/sentimiento.component';

const routes: Routes = [
  {path:'', component:BienvenidaComponent},
  {path:'sentimiento', component:SentimientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
