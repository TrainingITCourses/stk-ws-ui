import { ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { LocationElement } from './app/location.element';

(async () => {
  const app: ApplicationRef = await createApplication({ providers: [] });

  const locationElement = createCustomElement(LocationElement, {
    injector: app.injector,
  });
  customElements.define('stk-wbc-location', locationElement);
})();
