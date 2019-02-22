import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as _ from 'lodash';

import { HttpTranslateLoaderFactory } from './http-translate-loader-factory';

const TRANSLATIONS_PLAN_EN = require('../../../../assets/i18n/en.json');
const TRANSLATIONS_PLAN_VN = require('../../../../assets/i18n/vn.json');

describe('HttpTranslateLoaderFactory', () => {
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
    ],
  });

  it('should mapping key correctly between English and VietNam', () => {
    // Given
    const frKeys = Object.keys(flatten(TRANSLATIONS_PLAN_EN));
    const deKeys = Object.keys(flatten(TRANSLATIONS_PLAN_VN));
    // Then
    expect(_.difference(_.union(frKeys, deKeys), _.intersection(frKeys, deKeys))).toEqual([]);
  });

  describe('flatten function should work correctly', () => {
    // Given
    interface TestCase {
      given: { value: any };
      expected: any[];
    }

    const testCases: TestCase[] = [
      {
        given: {
          value: {}
        },
        expected: [],
      },
      {
        given: {
          value: null
        },
        expected: [''],
      },
      {
        given: {
          value: {
            a: {
              c: 'd',
              e: 'f'
            },
            g: {
              h: 'i',
              j: {
                k: 'l',
                m: 'n'
              }
            }
          },
        },
        expected: ['a.c', 'a.e', 'g.h', 'g.j.k', 'g.j.m'],
      }
    ];

    testCases.forEach(({given, expected}, index) => {
      it(`Test case #${index}`, () => {
        const keys = Object.keys(flatten(given.value));
        // Then
        expect(keys).toEqual(expected);
      });
    });
  });

  function flatten(data) {
    const result = {};

    function recurse(currentObj, property) {
      if (Object(currentObj) !== currentObj) {
        result[property] = currentObj;
      } else if (Array.isArray(currentObj)) {
        if (currentObj.length === 0) {
          result[property] = [];
        } else {
          for (let i = 0; i < currentObj.length; i++) {
            recurse(currentObj[i], property + '[' + i + ']');
          }
        }
      } else {
        let isEmpty = true;
        for (const p in currentObj) {
          if (currentObj.hasOwnProperty(p)) {
            isEmpty = false;
            recurse(currentObj[p], property ? property + '.' + p : p);
          }
        }
        if (isEmpty && property) {
          result[property] = {};
        }
      }
    }

    recurse(data, '');
    return result;
  }
});
