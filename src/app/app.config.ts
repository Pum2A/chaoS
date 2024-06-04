import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {
  provideAnimations,
  provideNoopAnimations,
} from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withJsonpSupport,
} from '@angular/common/http';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),

    provideClientHydration(),
    provideNoopAnimations(),
    provideAnimationsAsync(),
    provideAnimations(),
    provideHttpClient(withFetch(), withJsonpSupport()),
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
};
