import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';
import { HttpClientModule } from '@angular/common/http';

describe('SampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SampleService = TestBed.get(SampleService);
    expect(service).toBeTruthy();
  });
});
