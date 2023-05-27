import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing';
import { RandomOrderPipe } from './app/shared/pipes/random-order.pipe';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes), RandomOrderPipe],
}).catch(err => console.error(err));
