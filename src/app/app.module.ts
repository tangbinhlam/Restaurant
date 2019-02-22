import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomainModule } from '@restaurant/domain/domain.module';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './custom-material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@restaurant/shared/shared.module';
import { DefaultMissingTranslationHandlerTranslator, HttpTranslateLoaderFactory } from '@restaurant/shared';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DomainModule,
    CustomMaterialModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: DefaultMissingTranslationHandlerTranslator
      },
      loader: {
        provide: TranslateLoader,
        useFactory: HttpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
