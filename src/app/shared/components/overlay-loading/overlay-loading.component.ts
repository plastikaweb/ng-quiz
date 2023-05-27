import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overlay-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay-loading.component.html',
  styleUrls: ['./overlay-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayLoadingComponent {

}
