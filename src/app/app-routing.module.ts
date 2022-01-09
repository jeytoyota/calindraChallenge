import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Desafio1Component } from './desafio1/desafio1.component';

const routes: Routes = [
  { path:'', redirectTo:'desafio1', pathMatch:'full'},
  { path:'desafio1', component: Desafio1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
