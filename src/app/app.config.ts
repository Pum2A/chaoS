import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideAnimations,
  provideNoopAnimations,
} from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideNoopAnimations(),
    provideAnimationsAsync(),
    provideAnimations(), provideAnimationsAsync(), provideAnimationsAsync(),
  ],
};
