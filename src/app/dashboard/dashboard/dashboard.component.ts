import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';
import { SampleSummary } from '../sample-summary';
import { SampleData, SampleState } from '../sample-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  samples: SampleData[];
  selectedState: SampleState;

  constructor(private sampleService: SampleService) { }

  ngOnInit() {
  }

  stateSelected($event: SampleState) {
    this.selectedState = $event;
  }

  resetSamples(): void {
    this.samples = undefined;
    this.selectedState = undefined;
  }

  uploadSamples(): void {
    this.sampleService.getSampleData().subscribe(sampleData => {
      this.samples = sampleData;
    });
  }

  getSummary(): SampleSummary {
    return this.getSampleSummary(this.samples);
  }

  private getSampleSummary(sampleData: SampleData[] = []): SampleSummary {
    const summary: SampleSummary = sampleData.reduce((acc, cur) => {
      switch (cur.state) {
        case 'active':
          acc.active++;
          break;
        case 'hold':
           acc.hold++;
           break;
         case 'queued':
           acc.queued++;
           break;
         default:
           break;
      }
      return acc;
   },
    {active: 0, hold: 0, queued: 0});
    return summary;
  }
}
