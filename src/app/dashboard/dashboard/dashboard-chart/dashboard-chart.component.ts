import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { SingleDataSet } from 'ng2-charts';
import { SampleSummary } from '../../sample-summary';
import { SampleState } from '../../sample-data';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardChartComponent {

  @Input() sampleSummary: SampleSummary;
  @Output() stateSelected: EventEmitter<SampleState> = new EventEmitter();

  constructor() { }

  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    if (active.length > 0) {
      const chart: Chart = active['0']._chart as Chart;
      const label: string = chart.data.labels[active['0']._index] as string;
      const state: SampleState = this.translateChartLabelToSampleState(label);
      this.stateSelected.next(state);
    }
  }

  getChartData(): SingleDataSet {
    const result = this.sampleSummary ?
      [ this.sampleSummary.active, this.sampleSummary.queued, this.sampleSummary.hold ] :
      [];
    return result;
  }

  private translateChartLabelToSampleState(label: string): SampleState {
    let state: SampleState;
    switch (label) {
      case 'Active':
        state = 'active';
        break;
      case 'Queued':
        state = 'queued';
        break;
      case 'On Hold':
        state = 'hold';
        break;
      default:
        console.error(`Unable to determine SampleState for label = '${label}'.`);
        break;
    }
    return state;
  }
}
