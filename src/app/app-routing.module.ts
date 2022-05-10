import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [
  {path:'', component:BienvenidaComponent},
  {path:'contacto', component:ContactoComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'resultados', component: ResultadosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
