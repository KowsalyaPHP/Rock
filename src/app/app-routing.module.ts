import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RocklandingComponent } from './rocklanding/rocklanding.component';

const routes: Routes = [
  {
    path: "",
    component: RocklandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
