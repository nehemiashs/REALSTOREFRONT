import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { NgxPayPalModule } from 'ngx-paypal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministracionComponent } from './componentes/administracion/administracion.component';
import { AutenticationComponent } from './componentes/autentication/autentication.component';
import { CarritoComprasComponent } from './componentes/carrito-compras/carrito-compras.component';
import { CatalogoProductoComponent } from './componentes/catalogo-producto/catalogo-producto.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { HOMEComponent } from './componentes/home/home.component';
import { InformesComponent } from './componentes/informes/informes.component';
import { MapsComponent } from './componentes/maps/maps.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    DetalleProductoComponent,
    CatalogoProductoComponent,
    CarritoComprasComponent,
    AutenticationComponent,
    AdministracionComponent,
    PerfilComponent,
    HistorialComponent,
    UsuariosComponent,
    ProductosComponent,
    FilterPipe,
    InformesComponent,
    MapsComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    ReactiveFormsModule,
    NgxPayPalModule,
    /* MdbCheckboxModule, */
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    /* NgbModule */
    ChartsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
