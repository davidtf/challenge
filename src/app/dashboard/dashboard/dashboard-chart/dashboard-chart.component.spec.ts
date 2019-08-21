import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartComponent } from './dashboard-chart.component';
import { ChartsModule } from 'ng2-charts';

describe('DashboardChartComponent', () => {
  let component: DashboardChartComponent;
  let fixture: ComponentFixture<DashboardChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardChartComponent ],
      imports: [ ChartsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a canvas', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('canvas')).toBeTruthy();
  });

  it('should emit an event when chart is clicked', () => {
    const stateSelectedSpy = spyOn(component.stateSelected, 'next');
    const event = new MouseEvent('mousedown', {screenX: 100, screenY: 100});
    const mockChart = { data: {labels: ['Active', 'Queued', 'On Hold']}};
    const active = [{_chart: mockChart, _index: 1}];
    component.chartClicked({event, active});
    fixture.detectChanges();
    expect(stateSelectedSpy).toHaveBeenCalledWith('queued');
  });
});
