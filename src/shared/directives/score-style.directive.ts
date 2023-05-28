import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScoreStyle]',
  standalone: true,
})
export class ScoreStyleDirective implements OnInit {
  @HostBinding('class.high') isHigh!: boolean;
  @HostBinding('class.medium') isMedium!: boolean;
  @HostBinding('class.low') isLow!: boolean;

  @Input() appScoreStyle!: number;

  ngOnInit(): void {
    this.isHigh = this.appScoreStyle > 3;
    this.isMedium = this.appScoreStyle <= 3 && this.appScoreStyle > 1;
    this.isLow = this.appScoreStyle <= 1;
  }
}
