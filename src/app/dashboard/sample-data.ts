export interface SampleData {
    sampleNumber: number;
    id: string;
    state: SampleState;
    type: SampleType;
}
export type SampleState = 'active' | 'hold' | 'queued';
export type SampleType = 'client' | 'job';
