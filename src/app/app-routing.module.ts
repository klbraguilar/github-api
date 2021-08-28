import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsComponent } from './commits/commits.component';

const routes: Routes = [
  {path: '',   redirectTo: 'lista', pathMatch: 'full'},
  {path: 'lista', component:CommitsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
