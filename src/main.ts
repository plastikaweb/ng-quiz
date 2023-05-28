import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { loadingInterceptor } from '@quiz/interceptors';
import { RandomOrderPipe } from '@quiz/pipes';
import { routes } from './app/app-routing';
import { environment } from './environments/environment.development';
import { ENVIRONMENT } from '@quiz/core/services';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideRouter(routes),
    RandomOrderPipe,
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
  ],
}).catch(err => console.error(err));
