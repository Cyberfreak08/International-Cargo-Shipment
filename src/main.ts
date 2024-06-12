import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { AuthGuard } from './app/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { dataReducer } from './app/store/reducer';
import { DataEffects } from './app/store/effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    AuthGuard,
    importProvidersFrom(HttpClientModule),
    provideStore({ data: dataReducer }),
    provideEffects([DataEffects]),
  ],
}).catch((err) => console.error(err));
