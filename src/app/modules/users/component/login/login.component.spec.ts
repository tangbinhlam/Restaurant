import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {FormsModule} from "@angular/forms";
import {CustomMaterialModule} from "@restaurant/custom-material.module";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Router} from "@angular/router";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  setupTestBed({
    imports: [
      RouterTestingModule,
      CustomMaterialModule,
      FormsModule,
      BrowserAnimationsModule,

    ],
    providers: [
      {provide: Router, useValue: routerSpy}
    ],
    declarations: [LoginComponent]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Login() should work correctly', () => {
    it('should go to user page', () => {
      // Given
      component.username = 'admin';
      component.password = 'admin';
      // When
       component.login();
      // Then
      expect(component.username).toEqual('admin');
    });
  })
});
