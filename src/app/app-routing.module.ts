import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosFormComponent } from './components/libros/libros-form.component';
import { LibrosComponent } from './components/libros/libros.component';

const routes: Routes = [
  {path: '',pathMatch: 'full',redirectTo: 'libros'},
  {path:'libros',component:LibrosComponent},
  {path:'libros/form',component:LibrosFormComponent},
  {path:'libros/form/:idLibro',component:LibrosFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
