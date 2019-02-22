import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MultiHttpTranslationLoader } from './multi-http-translation.loader';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

const COMMON_TRANSLATIONS = require('../../../../assets/i18n/common.json');

describe('MultiHttpTranslationLoader', () => {

  setupTestBed({
    imports: [
      HttpClientTestingModule
    ]
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created correctly',
    inject([HttpClient], (client) => {
      const translateMultiple = new MultiHttpTranslationLoader(client, ['assets/i18n/', 'assets/i18n/sub/'], '.json');
      expect(translateMultiple).toBeTruthy();
    }));
});
