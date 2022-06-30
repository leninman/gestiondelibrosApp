import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros';
import { LibroService } from 'src/app/services/libro.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  titulo = 'Listado de libros';
  libros: Libros[];

  constructor(private service: LibroService) { }

  ngOnInit(): void {
    this.service.listarLibros().subscribe(libros => this.libros = libros);
  }

  public eliminar(libro: Libros): void {

    Swal.fire({
      title: 'Cuidado',
      text: `¿Seguro que desea eliminar a ${libro.titulo} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar !'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminarLibro(libro.idLibro).subscribe(() => {
          this.libros = this.libros.filter(a => a !== libro);
          Swal.fire('Libro eliminado', `Libro ${libro.titulo} eliminado exitosamente`, 'success');
        });

      }
    })
  }

}
