import { HttpClient } from '@angular/common/http';

import { MultiHttpTranslationLoader } from '../loader/multi-http-translation.loader';

export function HttpTranslateLoaderFactory(http: HttpClient) {
  return new MultiHttpTranslationLoader(http);
}
