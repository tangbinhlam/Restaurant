import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {CustomMaterialModule} from '@restaurant/custom-material.module';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  setupTestBed({
    imports: [
      RouterTestingModule,
      CustomMaterialModule,
      FormsModule,
      BrowserAnimationsModule,

    ],
    providers: [
      {provide: Router, useValue: {navigate: jest.fn()}},
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
    it('should go to user page',
      inject([Router], (router: Router) => {
      // Given
      component.username = 'admin';
      component.password = 'admin';
      // When
      component.login();
      // Then
      fixture.detectChanges();
      expect(router.navigate).toHaveBeenCalledTimes(1);
      expect(router.navigate).toHaveBeenCalledWith([`restaurant/user`]);
    }));
  });

  it('should go to register page',
    inject([Router], (router: Router) => {
      // Given
      component.username = 'admin';
      component.password = 'user';
      // When
      component.login();
      // Then
      fixture.detectChanges();
      expect(router.navigate).toHaveBeenCalledTimes(1);
      expect(router.navigate).toHaveBeenCalledWith([`restaurant/register`]);
    }));
});
