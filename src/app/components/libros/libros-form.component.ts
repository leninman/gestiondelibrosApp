import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libros } from 'src/app/models/libros';
import { LibroService } from 'src/app/services/libro.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-libros-form',
  templateUrl: './libros-form.component.html',
  styleUrls: ['./libros-form.component.css']
})
export class LibrosFormComponent implements OnInit {

  titulo = "Formulario de creacion de Libros";
  libro: Libros = new Libros();
  error: any;

  constructor(private service: LibroService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const idLibro: number = +params.get('idLibro');
      if(idLibro){
        this.service.leerLibro(idLibro).subscribe(libro => this.libro = libro)
      }
    })
  }

  public crear(): void {
    this.service.crearLibro(this.libro).subscribe(libro => {
      console.log(libro);
      Swal.fire('Nuevo Libro',`Libro ${libro.titulo} fue creado con éxito`,'success');
      this.router.navigate(['/libros']);
    }, err => {
      if (err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });


  }

  public editar(): void {
    this.service.actualizarLibro(this.libro).subscribe(libro => {
      console.log(libro);
      Swal.fire('Libro Modificado',`Libro ${libro.titulo} fue modificado con éxito`,'success');
      this.router.navigate(['/libros']);
    }, err => {
      if (err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
  }
}


