import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DashboardComponent } from './dashboard.component';
import { Component, Input } from '@angular/core';
import { SampleService } from '../sample.service';
import { of } from 'rxjs';
import { SampleSummary } from '../sample-summary';
import { SampleData, SampleState } from '../sample-data';

@Component({selector: 'app-dashboard-total', template: ''})
class DashboardTotalStubComponent {
  @Input() label: string;
  @Input() value: number;
}
@Component({selector: 'app-dashboard-chart', template: ''})
class DashboardChartStubComponent {
  @Input() sampleSummary: SampleSummary;
}
@Component({selector: 'app-dashboard-table', template: ''})
class DashboardTableStubComponent {
  @Input() samples: SampleData[];
  @Input() selectedState: SampleState;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let sampleService: SampleService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, DashboardTotalStubComponent, DashboardChartStubComponent, DashboardTableStubComponent],
      imports: [HttpClientTestingModule ],
      providers: [ SampleService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    sampleService = TestBed.get(SampleService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no samples initially', () => {
    expect(component.samples).toBeFalsy();
  });

  it('should have samples after upload occurs', async(() => {
    expect(component.samples).toBeFalsy();
    const samples: SampleData[] = [
      {
        sampleNumber: 1,
        id: 'ABC1234',
        state: 'active',
        type: 'job'
      }
    ];

    spyOn(sampleService, 'getSampleData').and.returnValue(of(samples));
    component.uploadSamples();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.samples).toEqual(samples);
    });
  }));
});
