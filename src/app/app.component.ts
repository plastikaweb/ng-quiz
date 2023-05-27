import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './core/services/loading.service';
import { OverlayLoadingComponent } from './shared/components/overlay-loading/overlay-loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NgIf, OverlayLoadingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$ = this.loadingService.isLoading$;

  constructor(private readonly loadingService: LoadingService) {}
}
