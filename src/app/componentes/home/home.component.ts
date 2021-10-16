import { Component, OnInit } from '@angular/core';
import { EntidadCategorias } from 'src/app/modelos/entidad-categorias';
import { EntidadProducto } from 'src/app/modelos/entidad-producto';
import { ClienteServiceService } from 'src/app/servicios/cliente-service.service';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HOMEComponent implements OnInit {
  html = `<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;
  constructor(private servicio:ClienteServiceService) { }

  User:boolean = true;
  Producto: EntidadProducto[]=[];
  Producto2: EntidadProducto[]=[];
  Categoria: EntidadCategorias[]=[];
  ngOnInit(): void {

    let user = localStorage.getItem('user');
    if(user)this.User = false;

    this.servicio.ListarCategorias().subscribe(data =>{
      this.Categoria = data;
    })
    this.servicio.ListarProductos().subscribe(data =>{
      //this.Producto = data;
    })
    this.servicio.ListarProductosTop().subscribe(data =>{
      this.Producto = data;
    })

  }
  categoria(e:any){
    //var codcat:any=e.target.parentElement.querySelector('a').getAttribute('id');
    localStorage.setItem('codcat',e);
    this.servicio.ListarProductosCategoria(e).subscribe(data =>{
      this.Producto2 = data;
    })
  }
  detalle(e:any){
    localStorage.setItem('codprod',e);
    location.href = 'detalle';
  }

}
