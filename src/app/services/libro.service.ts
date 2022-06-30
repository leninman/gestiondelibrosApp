import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libros } from '../models/libros';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseEndPoint = 'http://localhost:8080';

  private cabeceras: HttpHeaders = new HttpHeaders(
    { 'Content-Type': 'application/json' }
  )
  constructor(private http: HttpClient) { }

  public listarLibros(): Observable<Libros[]> {
    return this.http.get<Libros[]>(this.baseEndPoint);
  }

  public leerLibro(idLibro: number): Observable<Libros> {
    return this.http.get<Libros>(`${this.baseEndPoint}/${idLibro}`);
  }

  public crearLibro(libro: Libros): Observable<Libros> {
    return this.http.post<Libros>(this.baseEndPoint, libro, { headers: this.cabeceras });
  }


  public actualizarLibro(libro: Libros): Observable<Libros> {
    return this.http.put<Libros>(`${this.baseEndPoint}/${libro.idLibro}`, libro,
      { headers: this.cabeceras });
  }

  public eliminarLibro(idLibro:number):Observable<void>{
    return this.http.delete<void>(`${this.baseEndPoint}/${idLibro}`);
  }
}
