import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { myBootstrap } from './app/mybootstrap';

if (environment.production) {
  enableProdMode();
}

/*
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
*/

// If you comment out the next statement and uncomment the previous
// one the lazily-loaded route loads correctly
myBootstrap({
  platform: platformBrowserDynamic,
  module: AppModule
});
