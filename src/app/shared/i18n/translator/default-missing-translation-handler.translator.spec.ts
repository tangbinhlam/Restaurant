import { DefaultMissingTranslationHandlerTranslator } from './default-missing-translation-handler.translator';
import {
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { HttpTranslateLoaderFactory } from '../../i18n/factory/http-translate-loader-factory';

describe('DefaultMissingTranslationHandlerTranslator', () => {
  let defaultMissingTranslationHandler: DefaultMissingTranslationHandlerTranslator;
  let translate: TranslateService;

  setupTestBed({
    imports: [
      HttpClientTestingModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpTranslateLoaderFactory,
          deps: [HttpClient]
        }
      })
    ]
  });

  beforeEach(() => {
    translate = TestBed.get(TranslateService);
  });

  afterEach(() => {
  });

  it('should be created correctly', () => {
    // When
    defaultMissingTranslationHandler = new DefaultMissingTranslationHandlerTranslator();

    // Then
    expect(defaultMissingTranslationHandler).toBeTruthy();
    expect(defaultMissingTranslationHandler.handle).toBeDefined();
  });

  it('handle should work correctly when key is not null or undefined', () => {
    // Given
    defaultMissingTranslationHandler = new DefaultMissingTranslationHandlerTranslator();
    const missingTranslationHandlerParams: MissingTranslationHandlerParams = {
      key: 'a',
      translateService: translate
    };

    // When
    const actual: string = defaultMissingTranslationHandler.handle(missingTranslationHandlerParams);

    // Then
    expect(actual).toEqual('a');
  });

  it('handle should work correctly when key is null', () => {
    // Given
    defaultMissingTranslationHandler = new DefaultMissingTranslationHandlerTranslator();
    const missingTranslationHandlerParams: MissingTranslationHandlerParams = {
      key: 'null',
      translateService: translate
    };

    // When
    const actual: string = defaultMissingTranslationHandler.handle(missingTranslationHandlerParams);

    // Then
    expect(actual).toEqual('');
  });

  it('handle should work correctly when key is undefined', () => {
    // Given
    defaultMissingTranslationHandler = new DefaultMissingTranslationHandlerTranslator();
    const missingTranslationHandlerParams: MissingTranslationHandlerParams = {
      key: 'undefined',
      translateService: translate
    };

    // When
    const actual: string = defaultMissingTranslationHandler.handle(missingTranslationHandlerParams);

    // Then
    expect(actual).toEqual('');
  });
});
