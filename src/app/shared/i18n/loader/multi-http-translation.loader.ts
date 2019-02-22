import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import { HttpClient } from '@angular/common/http';

const COMMON_TRANSLATIONS = require('../../../../assets/i18n/common.json');

export class MultiHttpTranslationLoader implements TranslateLoader {

  static readonly TRANSLATION_URL = 'assets/i18n/';

  constructor(private http: HttpClient,
              private prefix: string[] = [MultiHttpTranslationLoader.TRANSLATION_URL], private suffix: string = '.json') {
  }

  getTranslation(lang: string): Observable<any> {
    return Observable.from(this.prefix)
      .mergeMap(prefix => this.http.get(prefix + lang + this.suffix))
      .mergeMap((result: any) => {
        return Observable.of(result);
      })
      .reduce((accumulatedTranslations, translations) => {
        return _.merge(accumulatedTranslations, translations, COMMON_TRANSLATIONS);
      }, {});
  }
}
