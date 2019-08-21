import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { SampleData, SampleState, SampleType } from './sample-data';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  getSampleData(): Observable<SampleData[]> {
    return this.http.get('/assets/sample.csv', {responseType: 'text'})
      .pipe(
        map(csvData => {
            const samples: SampleData[] = [];
            csvData.split('\n').forEach((csvLine, index) => {
              // Ignore first line, which is a header
              if (index === 0) {
                return;
              }
              const sample: SampleData = this.translateCsvLineToSampleData(csvLine);
              samples.push(sample);
            });

            return samples;
          }
        )
      );
  }

  private translateCsvLineToSampleData(csvLine: string): SampleData {
    const parts = csvLine.split(',');
    const sample: SampleData = {
      sampleNumber: Number(parts[0]),
      id: parts[1],
      state: parts[2] as SampleState,
      type: parts[3] as SampleType
    };
    return sample;
  }
}
