import { ApplicationConfig } from '@angular/core';
import { Routes, RouterModule, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
providers: [provideRouter(routes), provideClientHydration(), provideHttpClient() ]
};
