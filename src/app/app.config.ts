import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';  // Import from '@angular/common/http'

import { routes } from './app.routes';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideRouter(routes),
      provideHttpClient(withInterceptors([AuthInterceptor])), // Use provideHttpClient from the correct module
  ]
};
