import { NgModule } from '@angular/core';
import { CustomMaterialModule } from '@restaurant/custom-material.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent, UserComponent } from './component';
import { UserRoutingModule } from './user.route';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  imports: [
    UserRoutingModule,
    CustomMaterialModule,
    FormsModule,
    TranslateModule,
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
