import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { loadingInterceptor } from '@quiz/interceptors';
import { RandomOrderPipe } from '@quiz/pipes';
import { routes } from './app/app-routing';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loadingInterceptor])), provideRouter(routes), RandomOrderPipe],
}).catch(err => console.error(err));
