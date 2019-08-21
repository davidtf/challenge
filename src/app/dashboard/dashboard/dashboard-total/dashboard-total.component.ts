import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-total',
  templateUrl: './dashboard-total.component.html',
  styleUrls: ['./dashboard-total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTotalComponent {

  @Input() label: string;
  @Input() value: number;

  constructor() { }
}
