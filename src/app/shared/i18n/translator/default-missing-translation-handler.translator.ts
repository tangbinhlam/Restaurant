import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class DefaultMissingTranslationHandlerTranslator implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): string {
    return params.key.endsWith('null') || params.key.endsWith('undefined') ? '' : params.key;
  }
}
