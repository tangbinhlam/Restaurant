import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent, UserComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserComponent},
  {
    path: 'login',
    component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
