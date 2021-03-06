import { RouterModule, Routes } from '@angular/router'; // importamos RouterModule y Router
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Importo los servicios: */ 
import { EquipoService } from './equipo.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '', component: InicioComponent , pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' } // cualquier ruta desconocida sera redirigida a inicio
  // podria redirigirse a una pagina de err404
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    EquipoService   // agrego el servicio importado
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
