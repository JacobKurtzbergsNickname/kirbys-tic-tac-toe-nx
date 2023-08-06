import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { NbThemeOptions } from '@nebular/theme';

  export interface CustomApplicationConfig extends ApplicationConfig {
    themeOptions?: NbThemeOptions;
  }
  
  export const appConfig: CustomApplicationConfig = {
    // Other app configurations if any
    providers: [provideRouter(appRoutes, withEnabledBlockingInitialNavigation())],
    themeOptions: {
      name: 'cosmic', // Your theme name or other theme options
    },
  };
  
