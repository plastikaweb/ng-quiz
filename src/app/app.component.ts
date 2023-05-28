import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from '@quiz/core/services';
import { OverlayLoadingComponent } from '@quiz/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, NgIf, OverlayLoadingComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isLoading$ = this.loadingService.isLoading$;

  constructor(private readonly loadingService: LoadingService) {}
}
