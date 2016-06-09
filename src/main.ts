import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {EventViewAppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(EventViewAppComponent);
