import { NgModule } from '@angular/core';

import { LoginComponent, UserComponent } from './component';
import { UserRoutingModule } from './user.route';
import { CustomMaterialModule } from '@restaurant/custom-material.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  imports: [
    UserRoutingModule,
    CustomMaterialModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    UserComponent,
    RegisterComponent,
  ],
  exports: [
    LoginComponent,
    UserComponent,
  ]
})
export class UserModule {
}
