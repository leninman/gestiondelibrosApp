import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  titulo='Listado de libros';
  libros:Libros[];
  
  constructor(private service:LibroService) { }

  ngOnInit(): void {
    this.service.listarLibros().subscribe(libros =>this.libros=libros);
  }

}
